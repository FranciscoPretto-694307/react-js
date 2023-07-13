import { NextResponse } from "next/server";


export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const s = searchParams.get('s')
    console.log(request.nextUrl.searchParams);
    const resources = []

    for (let i=1; i<=10; i++) {
        resources.push({"id":i, "img":"/ulises.png", "title":"TITULO " + i, "name":"NOMBRE " + i, "text":"ESTE ES EL TEXTO " + i})
    }

    let res = []
    console.log(searchParams)
    console.log(s)
    if (s != null && s != undefined) {
        console.log("filtrando")
        console.log(s)
        let f = resources.filter(function(arg) {return arg.title.includes(s)})
        res = f
    } else {
        res = resources
    }

    return NextResponse.json({"profesores":res})
}