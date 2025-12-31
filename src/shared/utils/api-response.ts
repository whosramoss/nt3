import { NextResponse } from "next/server";

type Message = {
  message: string;
};

export class ApiResponse {
  static ok<T>(data: T): NextResponse<T> {
    return NextResponse.json(data, { status: 200 });
  }

  static created<T>(data: T): NextResponse<T> {
    return NextResponse.json(data, { status: 201 });
  }

  static accepted<T>(data?: T): NextResponse<T | Message> {
    return NextResponse.json(data || { message: "Requisição aceita" }, {
      status: 202,
    });
  }

  static noContent(): NextResponse<null> {
    return new NextResponse(null, { status: 204 });
  }

  static badRequest(customMessage?: string): NextResponse<Message> {
    return NextResponse.json(
      { message: customMessage || "Formato de dados inválido" },
      { status: 400 },
    );
  }

  static unauthorized(customMessage?: string): NextResponse<Message> {
    return NextResponse.json(
      { message: customMessage || "Não autorizado" },
      { status: 401 },
    );
  }

  static forbidden(customMessage?: string): NextResponse<Message> {
    return NextResponse.json(
      { message: customMessage || "Acesso negado" },
      { status: 403 },
    );
  }

  static notFound(customMessage?: string): NextResponse<Message> {
    return NextResponse.json(
      { message: customMessage || "Recurso não encontrado" },
      { status: 404 },
    );
  }

  static conflict(customMessage?: string): NextResponse<Message> {
    return NextResponse.json(
      { message: customMessage || "Conflito na requisição" },
      { status: 409 },
    );
  }

  static unprocessableEntity(customMessage?: string): NextResponse<Message> {
    return NextResponse.json(
      { message: customMessage || "Entidade não processável" },
      { status: 422 },
    );
  }

  static tooManyRequests(customMessage?: string): NextResponse<Message> {
    return NextResponse.json(
      { message: customMessage || "Muitas requisições" },
      { status: 429 },
    );
  }

  static internalServerError(customMessage?: string): NextResponse<Message> {
    return NextResponse.json(
      { message: customMessage || "Erro interno do servidor" },
      { status: 500 },
    );
  }

  static notImplemented(customMessage?: string): NextResponse<Message> {
    return NextResponse.json(
      { message: customMessage || "Funcionalidade não implementada" },
      { status: 501 },
    );
  }

  static serviceUnavailable(customMessage?: string): NextResponse<Message> {
    return NextResponse.json(
      { message: customMessage || "Serviço indisponível" },
      { status: 503 },
    );
  }

  static custom(status: number, message: string): NextResponse<Message> {
    return NextResponse.json({ message }, { status });
  }
}
