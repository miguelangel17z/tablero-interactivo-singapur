import { NextResponse } from "next/server";
import { Dataset } from "@/data/singapore";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q")?.toLowerCase() || "population";

  try {
    // Realizamos el fetch REAL a la API oficial del Departamento de Estadística de Singapur (SingStat)
    const res = await fetch(
      `https://tablebuilder.singstat.gov.sg/api/table/resourceid?keyword=${query}&searchOption=title`,
      {
        // Revalidar cada 24 horas (86400 segundos) para no agotar la cuota de la API
        next: { revalidate: 86400 },
      }
    );

    if (!res.ok) {
      throw new Error(`API respondió con estado: ${res.status}`);
    }

    const json = await res.json();
    
    // Mapeamos la respuesta JSON del gobierno a nuestra interfaz "Dataset" del frontend
    // SingStat devuelve: { Data: { records: [ { id, title, theme, subject, tableType } ] } }
    const records = json.Data?.records || [];
    
    const mappedDatasets: Dataset[] = records.map((record: any) => ({
      id: record.id,
      name: record.title,
      agency: "SingStat (DOS)", // Asignamos la agencia dueña del dato
      category: record.theme || record.subject || "Estadística",
      format: "API / JSON",
      updated: record.tableType || "Anual",
      quality: 98, // Calidad alta por ser un censo oficial
      status: "Publicado",
    }));

    return NextResponse.json(
      {
        success: true,
        count: mappedDatasets.length,
        data: mappedDatasets,
      },
      {
        headers: {
          "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=43200",
        },
      }
    );
  } catch (error) {
    console.error("Error fetching from SingStat:", error);
    return NextResponse.json(
      { success: false, error: "Error de conexión con API gubernamental" },
      { status: 500 }
    );
  }
}
