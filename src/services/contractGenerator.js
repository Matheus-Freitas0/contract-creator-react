import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  AlignmentType,
  ImageRun,
  Header,
} from "docx";
import { saveAs } from "file-saver";

// Função para formatar moeda brasileira
const formatCurrency = (value) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

class ContractGenerator {
  static async generateDOCX(contractData) {
    try {
      // Carregar a logo
      const logoResponse = await fetch("/logo.png");
      if (!logoResponse.ok) {
        throw new Error(`Erro ao carregar logo: ${logoResponse.status}`);
      }
      const logoBuffer = await logoResponse.arrayBuffer();

      const doc = new Document({
        sections: [
          {
            properties: {
              titlePage: true,
            },
            headers: {
              first: new Header({
                children: [
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [
                      new ImageRun({
                        data: logoBuffer,
                        transformation: { width: 150, height: 150 },
                      }),
                    ],
                    spacing: { after: 200 },
                  }),
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [
                      new TextRun({
                        text: "DevShop Tecnologia e Comércio LTDA",
                        bold: true,
                        size: 24,
                      }),
                    ],
                    spacing: { after: 400 },
                  }),
                ],
              }),
            },
            children: [
              // título principal
              new Paragraph({
                children: [
                  new TextRun({
                    text: "CONTRATO DE DESENVOLVIMENTO DIGITAL E SERVIÇOS WEB",
                    bold: true,
                    size: 32,
                  }),
                ],
                alignment: AlignmentType.CENTER,
                spacing: { after: 400 },
              }),

              // CONTRATADA
              new Paragraph({
                children: [
                  new TextRun({
                    text: "CONTRATADA",
                    bold: true,
                    size: 24,
                  }),
                ],
                spacing: { after: 200 },
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: `${contractData.company.name}, inscrita no CNPJ sob nº ${contractData.company.cnpj}, com sede na ${contractData.company.address}, ${contractData.company.city}, CEP ${contractData.company.zipCode}, representada por ${contractData.company.representative}, doravante denominada CONTRATADA.`,
                    size: 24,
                  }),
                ],
                spacing: { after: 400 },
              }),

              // CONTRATANTE
              new Paragraph({
                children: [
                  new TextRun({
                    text: "CONTRATANTE",
                    bold: true,
                    size: 24,
                  }),
                ],
                spacing: { after: 200 },
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: `${contractData.clientName}, inscrita no CNPJ nº ${contractData.clientCNPJ}, com endereço em ${contractData.clientAddress}, representada por ${contractData.clientRepresentative}, doravante denominada CONTRATANTE.`,
                    size: 24,
                  }),
                ],
                spacing: { after: 400 },
              }),

              // CLÁUSULA PRIMEIRA: DO OBJETO
              new Paragraph({
                children: [
                  new TextRun({
                    text: "CLÁUSULA PRIMEIRA: DO OBJETO",
                    bold: true,
                    size: 24,
                  }),
                ],
                spacing: { after: 200 },
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: "O presente contrato tem por objeto a prestação de serviços digitais e de desenvolvimento web, incluindo mas não se limitando a criação de sites, e-commerces, sistemas web, landing pages, integrações e demais serviços tecnológicos solicitados pela CONTRATANTE, conforme especificações descritas no formulário inicial.",
                    size: 24,
                  }),
                ],
                spacing: { after: 400 },
              }),

              // CLÁUSULA SEGUNDA: DAS OBRIGAÇÕES
              new Paragraph({
                children: [
                  new TextRun({
                    text: "CLÁUSULA SEGUNDA: DAS OBRIGAÇÕES",
                    bold: true,
                    size: 24,
                  }),
                ],
                spacing: { after: 200 },
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: "I – Obrigações da CONTRATADA:",
                    bold: true,
                    size: 24,
                  }),
                ],
                spacing: { after: 200 },
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: "1. Utilizar boas práticas de desenvolvimento e tecnologias atualizadas para garantir performance, segurança e design profissional.",
                    size: 24,
                  }),
                ],
                spacing: { after: 200 },
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: "2. Cumprir o cronograma acordado e comunicar quaisquer imprevistos que possam afetar os prazos.",
                    size: 24,
                  }),
                ],
                spacing: { after: 200 },
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: "3. Manter sigilo sobre todas as informações fornecidas pela CONTRATANTE.",
                    size: 24,
                  }),
                ],
                spacing: { after: 200 },
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: `4. Disponibilizar suporte técnico por até ${
                      contractData.supportMonths || 0
                    } meses após a entrega final, salvo acordo adicional.`,
                    size: 24,
                  }),
                ],
                spacing: { after: 200 },
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: "II – Obrigações da CONTRATANTE:",
                    bold: true,
                    size: 24,
                  }),
                ],
                spacing: { after: 200 },
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: "1. Fornecer as informações, materiais e acessos necessários para execução do projeto.",
                    size: 24,
                  }),
                ],
                spacing: { after: 200 },
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: "2. Cumprir os prazos de pagamento e entrega de conteúdo acordados.",
                    size: 24,
                  }),
                ],
                spacing: { after: 200 },
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: "3. Responder civil e criminalmente pelo conteúdo fornecido.",
                    size: 24,
                  }),
                ],
                spacing: { after: 200 },
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: "4. Aprovar ou solicitar revisões dentro dos prazos previstos no cronograma.",
                    size: 24,
                  }),
                ],
                spacing: { after: 400 },
              }),

              // CLÁUSULA TERCEIRA: PRAZOS E CRONOGRAMA
              new Paragraph({
                children: [
                  new TextRun({
                    text: "CLÁUSULA TERCEIRA: PRAZOS E CRONOGRAMA",
                    bold: true,
                    size: 24,
                  }),
                ],
                spacing: { after: 200 },
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: `O prazo médio para desenvolvimento é de ${
                      contractData.projectDeadline || 0
                    } (${this.numberToWords(
                      contractData.projectDeadline || 0
                    )}) dias úteis, podendo variar conforme o escopo do projeto e a entrega dos materiais pela CONTRATANTE. Entregas parciais poderão ser definidas em etapas: planejamento, design, desenvolvimento, testes e implantação.`,
                    size: 24,
                  }),
                ],
                spacing: { after: 400 },
              }),

              // CLÁUSULA QUARTA: VALORES E FORMAS DE PAGAMENTO
              new Paragraph({
                children: [
                  new TextRun({
                    text: "CLÁUSULA QUARTA: VALORES E FORMAS DE PAGAMENTO",
                    bold: true,
                    size: 24,
                  }),
                ],
                spacing: { after: 200 },
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: `Os valores e condições de pagamento constam no formulário inicial deste contrato. O pagamento será realizado conforme a forma escolhida: ${
                      contractData.paymentMethod === "À vista"
                        ? `À vista com ${
                            contractData.paymentDiscount || 0
                          }% de desconto`
                        : contractData.paymentMethod === "Parcelado"
                        ? `Parcelado em ${
                            contractData.paymentInstallments || 2
                          }x`
                        : contractData.paymentMethod === "Por etapas"
                        ? `Por etapas do projeto, com valor de ${formatCurrency(
                            contractData.phaseValue || 0
                          )} por fase`
                        : "conforme acordado"
                    }.`,
                    size: 24,
                  }),
                ],
                spacing: { after: 200 },
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: `Prazos de Pagamento: Para pagamentos parcelados, o vencimento será todo dia útil do mês. Para pagamentos à vista, o vencimento será ao fim do projeto ou fase acordada.`,
                    size: 24,
                  }),
                ],
                spacing: { after: 200 },
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: `Multas e Juros: Em caso de atraso, incidirá multa de ${
                      contractData.penaltyPercentage || 0
                    }% sobre o valor devido, além de juros de ${
                      contractData.dailyInterestRate || 0
                    }% ao dia sobre o valor em atraso, além da suspensão imediata dos serviços até a regularização.`,
                    size: 24,
                  }),
                ],
                spacing: { after: 400 },
              }),

              // CLÁUSULA QUINTA: CONFIDENCIALIDADE E PROPRIEDADE INTELECTUAL
              new Paragraph({
                children: [
                  new TextRun({
                    text: "CLÁUSULA QUINTA: CONFIDENCIALIDADE E PROPRIEDADE INTELECTUAL",
                    bold: true,
                    size: 24,
                  }),
                ],
                spacing: { after: 200 },
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Todas as informações, arquivos e materiais fornecidos pela CONTRATANTE serão tratados como confidenciais. O código-fonte, design e demais elementos desenvolvidos pertencem à CONTRATADA até o pagamento integral do contrato. Após a quitação, os direitos são transferidos à CONTRATANTE, exceto frameworks, bibliotecas e componentes de uso comum.",
                    size: 24,
                  }),
                ],
                spacing: { after: 400 },
              }),

              // CLÁUSULA SEXTA: SUPORTE E MANUTENÇÃO
              new Paragraph({
                children: [
                  new TextRun({
                    text: "CLÁUSULA SEXTA: SUPORTE E MANUTENÇÃO",
                    bold: true,
                    size: 24,
                  }),
                ],
                spacing: { after: 200 },
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: `A CONTRATADA oferecerá suporte técnico gratuito por ${
                      contractData.supportMonths || 0
                    } (${this.numberToWords(
                      contractData.supportMonths || "Zero"
                    )}) meses após a entrega final para ajuste de problemas e bugs. Após esse período, poderá ser contratado um plano de manutenção mensal com valores e condições específicas.`,
                    size: 24,
                  }),
                ],
                spacing: { after: 400 },
              }),

              // CLÁUSULA SÉTIMA: DISPOSIÇÕES GERAIS
              new Paragraph({
                children: [
                  new TextRun({
                    text: "CLÁUSULA SÉTIMA: DISPOSIÇÕES GERAIS",
                    bold: true,
                    size: 24,
                  }),
                ],
                spacing: { after: 200 },
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Serviços adicionais, idiomas extras, produção de conteúdo, hospedagem e aquisição de domínio não estão inclusos, salvo acordo expresso. O presente contrato é regido pelas leis brasileiras, elegendo-se o foro da cidade de São Paulo/SP para dirimir quaisquer controvérsias.",
                    size: 24,
                  }),
                ],
                spacing: { after: 400 },
              }),

              // Observações adicionais (se houver)
              ...(contractData.additionalNotes
                ? [
                    new Paragraph({
                      children: [
                        new TextRun({
                          text: "OBSERVAÇÕES ADICIONAIS",
                          bold: true,
                          size: 24,
                        }),
                      ],
                      spacing: { after: 200 },
                    }),
                    new Paragraph({
                      children: [
                        new TextRun({
                          text: contractData.additionalNotes,
                          size: 24,
                        }),
                      ],
                      spacing: { after: 400 },
                    }),
                  ]
                : []),

              // Data e assinaturas
              new Paragraph({
                children: [
                  new TextRun({
                    text: `São Paulo/SP, ${this.formatDate(
                      contractData.contractDate
                    )}.`,
                    size: 24,
                  }),
                ],
                alignment: AlignmentType.CENTER,
                spacing: { after: 400 },
              }),

              // Assinaturas
              new Paragraph({
                children: [
                  new TextRun({
                    text: "_________________________________________",
                    size: 24,
                  }),
                ],
                alignment: AlignmentType.CENTER,
                spacing: { after: 200 },
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: contractData.company.representative,
                    bold: true,
                    size: 24,
                  }),
                ],
                alignment: AlignmentType.CENTER,
                spacing: { after: 200 },
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: `${contractData.company.representativeRole} – ${contractData.company.name} (CONTRATADA)`,
                    size: 24,
                  }),
                ],
                alignment: AlignmentType.CENTER,
                spacing: { after: 400 },
              }),

              new Paragraph({
                children: [
                  new TextRun({
                    text: "_________________________________________",
                    size: 24,
                  }),
                ],
                alignment: AlignmentType.CENTER,
                spacing: { after: 200 },
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: contractData.clientRepresentative,
                    bold: true,
                    size: 24,
                  }),
                ],
                alignment: AlignmentType.CENTER,
                spacing: { after: 200 },
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: `${contractData.clientRepresentativeRole} – CONTRATANTE`,
                    size: 24,
                  }),
                ],
                alignment: AlignmentType.CENTER,
              }),
            ],
          },
        ],
      });

      const blob = await Packer.toBlob(doc);

      const fileName = `Contrato_${contractData.clientName.replace(
        /[^a-zA-Z0-9]/g,
        "_"
      )}_${new Date().toISOString().split("T")[0]}.docx`;

      saveAs(blob, fileName);
    } catch (error) {
      throw new Error(`Erro ao gerar DOCX: ${error.message}`);
    }
  }

  static numberToWords(num) {
    const numbers = {
      1: "um",
      2: "dois",
      3: "três",
      4: "quatro",
      5: "cinco",
      6: "seis",
      7: "sete",
      8: "oito",
      9: "nove",
      10: "dez",
      11: "onze",
      12: "doze",
      13: "treze",
      14: "catorze",
      15: "quinze",
      16: "dezesseis",
      17: "dezessete",
      18: "dezoito",
      19: "dezenove",
      20: "vinte",
      21: "vinte e um",
      22: "vinte e dois",
      23: "vinte e três",
      24: "vinte e quatro",
      25: "vinte e cinco",
      26: "vinte e seis",
      27: "vinte e sete",
      28: "vinte e oito",
      29: "vinte e nove",
      30: "trinta",
      31: "trinta e um",
      32: "trinta e dois",
      33: "trinta e três",
      34: "trinta e quatro",
      35: "trinta e cinco",
      36: "trinta e seis",
      37: "trinta e sete",
      38: "trinta e oito",
      39: "trinta e nove",
      40: "quarenta",
      41: "quarenta e um",
      42: "quarenta e dois",
      43: "quarenta e três",
      44: "quarenta e quatro",
      45: "quarenta e cinco",
      46: "quarenta e seis",
      47: "quarenta e sete",
      48: "quarenta e oito",
      49: "quarenta e nove",
      50: "cinquenta",
      60: "sessenta",
      70: "setenta",
      80: "oitenta",
      90: "noventa",
      100: "cem",
      101: "cento e um",
      102: "cento e dois",
      103: "cento e três",
      104: "cento e quatro",
      105: "cento e cinco",
      106: "cento e seis",
      107: "cento e sete",
      108: "cento e oito",
      109: "cento e nove",
      110: "cento e dez",
      111: "cento e onze",
      112: "cento e doze",
      113: "cento e treze",
      114: "cento e quatorze",
      115: "cento e quinze",
      116: "cento e dezesseis",
      117: "cento e dezessete",
      118: "cento e dezoito",
      119: "cento e dezenove",
      120: "cento e vinte",
    };

    if (numbers[num]) {
      return numbers[num];
    }

    // Para números maiores, retorna o número em formato simples
    return num.toString();
  }

  static formatDate(dateString) {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR");
  }
}

export default ContractGenerator;
