import React from "react";
import { Box, Typography, Paper, Divider, Grid, Chip } from "@mui/material";

// Função para formatar moeda brasileira
const formatCurrency = (value) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

const PreviewStep = ({ data, company }) => {
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR");
  };

  return (
    <Box>
      {/* Header */}
      <Box sx={{ textAlign: "center", mb: { xs: 3, sm: 4 } }}>
        <Typography
          variant="h4"
          gutterBottom
          fontWeight="bold"
          color="primary"
          sx={{ fontSize: { xs: "1.75rem", sm: "2rem" } }}
        >
          👁️ Preview do Contrato
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ fontSize: { xs: "0.875rem", sm: "1rem" } }}
        >
          Revise os dados antes de gerar o contrato
        </Typography>
      </Box>

      {/* Contract Preview */}
      <Box
        sx={{
          maxWidth: { xs: "100%", sm: 900 },
          mx: "auto",
          px: { xs: 1, sm: 0 },
        }}
      >
        <Paper
          elevation={4}
          sx={{
            p: { xs: 2, sm: 4 },
            borderRadius: 3,
            backgroundColor: "#fafafa",
            border: "1px solid #e0e0e0",
          }}
        >
          {/* Title */}
          <Typography
            variant="h5"
            gutterBottom
            color="primary"
            align="center"
            fontWeight="bold"
            sx={{ mb: 3 }}
          >
            CONTRATO DE DESENVOLVIMENTO DIGITAL E SERVIÇOS WEB
          </Typography>

          <Divider sx={{ my: 3 }} />

          {/* Parties */}
          <Grid container spacing={{ xs: 2, sm: 4 }} sx={{ mb: 3 }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="h6"
                fontWeight="bold"
                gutterBottom
                color="primary"
              >
                CONTRATADA
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                {company.name}, inscrita no CNPJ sob nº {company.cnpj}, com sede
                na {company.address}, {company.city}, CEP {company.zipCode},
                representada por {company.representative}, doravante denominada
                CONTRATADA.
              </Typography>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="h6"
                fontWeight="bold"
                gutterBottom
                color="primary"
              >
                CONTRATANTE
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                {data.clientName}, inscrita no CNPJ nº {data.clientCNPJ}, com
                endereço em {data.clientAddress}, representada por{" "}
                {data.clientRepresentative}, doravante denominada CONTRATANTE.
              </Typography>
            </Grid>
          </Grid>

          <Divider sx={{ my: 3 }} />

          {/* CLÁUSULA PRIMEIRA: DO OBJETO */}
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h6"
              fontWeight="bold"
              gutterBottom
              color="primary"
            >
              CLÁUSULA PRIMEIRA: DO OBJETO
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
              O presente contrato tem por objeto a prestação de serviços
              digitais e de desenvolvimento web, incluindo mas não se limitando
              a criação de sites, e-commerces, sistemas web, landing pages,
              integrações e demais serviços tecnológicos solicitados pela
              CONTRATANTE, conforme especificações descritas no formulário
              inicial.
            </Typography>
          </Box>

          {/* CLÁUSULA SEGUNDA: DAS OBRIGAÇÕES */}
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h6"
              fontWeight="bold"
              gutterBottom
              color="primary"
            >
              CLÁUSULA SEGUNDA: DAS OBRIGAÇÕES
            </Typography>
            <Typography variant="body1" fontWeight="bold" sx={{ mb: 1 }}>
              I – Obrigações da CONTRATADA:
            </Typography>
            <Typography variant="body1" sx={{ mb: 1, ml: 2 }}>
              1. Utilizar boas práticas de desenvolvimento e tecnologias
              atualizadas para garantir performance, segurança e design
              profissional.
            </Typography>
            <Typography variant="body1" sx={{ mb: 1, ml: 2 }}>
              2. Cumprir o cronograma acordado e comunicar quaisquer imprevistos
              que possam afetar os prazos.
            </Typography>
            <Typography variant="body1" sx={{ mb: 1, ml: 2 }}>
              3. Manter sigilo sobre todas as informações fornecidas pela
              CONTRATANTE.
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, ml: 2 }}>
              4. Disponibilizar suporte técnico por até{" "}
              <strong>{data.supportMonths} meses</strong> após a entrega final,
              salvo acordo adicional.
            </Typography>

            <Typography variant="body1" fontWeight="bold" sx={{ mb: 1 }}>
              II – Obrigações da CONTRATANTE:
            </Typography>
            <Typography variant="body1" sx={{ mb: 1, ml: 2 }}>
              1. Fornecer as informações, materiais e acessos necessários para
              execução do projeto.
            </Typography>
            <Typography variant="body1" sx={{ mb: 1, ml: 2 }}>
              2. Cumprir os prazos de pagamento e entrega de conteúdo acordados.
            </Typography>
            <Typography variant="body1" sx={{ mb: 1, ml: 2 }}>
              3. Responder civil e criminalmente pelo conteúdo fornecido.
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, ml: 2 }}>
              4. Aprovar ou solicitar revisões dentro dos prazos previstos no
              cronograma.
            </Typography>
          </Box>

          {/* CLÁUSULA TERCEIRA: PRAZOS E CRONOGRAMA */}
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h6"
              fontWeight="bold"
              gutterBottom
              color="primary"
            >
              CLÁUSULA TERCEIRA: PRAZOS E CRONOGRAMA
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
              O prazo médio para desenvolvimento é de{" "}
              <strong>{data.projectDeadline} dias úteis</strong>, podendo variar
              conforme o escopo do projeto e a entrega dos materiais pela
              CONTRATANTE. Entregas parciais poderão ser definidas em etapas:
              planejamento, design, desenvolvimento, testes e implantação.
            </Typography>
          </Box>

          {/* CLÁUSULA QUARTA: VALORES E FORMAS DE PAGAMENTO */}
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h6"
              fontWeight="bold"
              gutterBottom
              color="primary"
            >
              CLÁUSULA QUARTA: VALORES E FORMAS DE PAGAMENTO
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
              Os valores e condições de pagamento constam no formulário inicial
              deste contrato. O pagamento será realizado conforme a forma
              escolhida:
              {data.paymentMethod === "À vista" && (
                <>
                  {" "}
                  <strong>
                    À vista com {data.paymentDiscount || 0}% de desconto
                  </strong>
                  .
                </>
              )}
              {data.paymentMethod === "Parcelado" && (
                <>
                  {" "}
                  <strong>Parcelado em {data.paymentInstallments || 2}x</strong>
                  .
                </>
              )}
              {data.paymentMethod === "Por etapas" && (
                <>
                  {" "}
                  <strong>
                    Por etapas do projeto, com valor de R${" "}
                    {formatCurrency(data.phaseValue || 0)} por fase
                  </strong>
                  .
                </>
              )}
              <br />
              <br />
              <strong>Prazos de Pagamento:</strong> Para pagamentos parcelados,
              o vencimento será todo dia útil do mês. Para pagamentos à vista, o
              vencimento será ao fim do projeto ou fase acordada.
              <br />
              <br />
              <strong>Multas e Juros:</strong> Em caso de atraso, incidirá multa
              de <strong>{data.penaltyPercentage}%</strong> sobre o valor
              devido, além de juros de{" "}
              <strong>{data.dailyInterestRate}% ao dia</strong> sobre o valor em
              atraso, além da suspensão imediata dos serviços até a
              regularização.
            </Typography>
          </Box>

          {/* CLÁUSULA QUINTA: CONFIDENCIALIDADE E PROPRIEDADE INTELECTUAL */}
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h6"
              fontWeight="bold"
              gutterBottom
              color="primary"
            >
              CLÁUSULA QUINTA: CONFIDENCIALIDADE E PROPRIEDADE INTELECTUAL
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
              Todas as informações, arquivos e materiais fornecidos pela
              CONTRATANTE serão tratados como confidenciais. O código-fonte,
              design e demais elementos desenvolvidos pertencem à CONTRATADA até
              o pagamento integral do contrato. Após a quitação, os direitos são
              transferidos à CONTRATANTE, exceto frameworks, bibliotecas e
              componentes de uso comum.
            </Typography>
          </Box>

          {/* CLÁUSULA SEXTA: SUPORTE E MANUTENÇÃO */}
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h6"
              fontWeight="bold"
              gutterBottom
              color="primary"
            >
              CLÁUSULA SEXTA: SUPORTE E MANUTENÇÃO
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
              A CONTRATADA oferecerá suporte técnico gratuito por{" "}
              <strong>{data.supportMonths} meses</strong> após a entrega final
              para ajuste de problemas e bugs. Após esse período, poderá ser
              contratado um plano de manutenção mensal com valores e condições
              específicas.
            </Typography>
          </Box>

          {/* CLÁUSULA SÉTIMA: DISPOSIÇÕES GERAIS */}
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h6"
              fontWeight="bold"
              gutterBottom
              color="primary"
            >
              CLÁUSULA SÉTIMA: DISPOSIÇÕES GERAIS
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
              Serviços adicionais, idiomas extras, produção de conteúdo,
              hospedagem e aquisição de domínio não estão inclusos, salvo acordo
              expresso. O presente contrato é regido pelas leis brasileiras,
              elegendo-se o foro da cidade de São Paulo/SP para dirimir
              quaisquer controvérsias.
            </Typography>
          </Box>

          {data.additionalNotes && (
            <Box sx={{ mb: 3 }}>
              <Typography
                variant="h6"
                fontWeight="bold"
                gutterBottom
                color="primary"
              >
                Observações Adicionais
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  backgroundColor: "#fff3cd",
                  p: 2,
                  borderRadius: 1,
                  border: "1px solid #ffeaa7",
                  lineHeight: 1.6,
                }}
              >
                {data.additionalNotes}
              </Typography>
            </Box>
          )}

          <Divider sx={{ my: 3 }} />

          {/* Date and Signatures */}
          <Typography
            variant="body1"
            align="center"
            sx={{ mb: 4, fontWeight: 500 }}
          >
            São Paulo/SP, {formatDate(data.contractDate)}.
          </Typography>

          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ textAlign: "center" }}>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  _________________________________________
                </Typography>
                <Typography variant="body1" fontWeight="bold" sx={{ mb: 1 }}>
                  {company.representative}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {company.representativeRole} – {company.name} (CONTRATADA)
                </Typography>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ textAlign: "center" }}>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  _________________________________________
                </Typography>
                <Typography variant="body1" fontWeight="bold" sx={{ mb: 1 }}>
                  {data.clientRepresentative}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {data.clientRepresentativeRole} – CONTRATANTE
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Box>
  );
};

export default PreviewStep;
