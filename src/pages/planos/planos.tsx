import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createGlobalStyle } from "styled-components";
import { Menu } from "../../components/Menu";
import "./planos.css";


/* Dependências principais (já devem estar no seu package.json):
bash
npm install react react-dom typescript
npm install @types/react @types/react-dom

Dependências específicas do projeto:
bash
# Carrossel e estilos
npm install react-slick slick-carousel
npm install @types/react-slick --save-dev

# Componentes estilizados (styled-components)
npm install styled-components
npm install @types/styled-components --save-dev

# Fontes (opcional - já está via CDN no seu CSS)
npm install @fontsource/archivo-black @fontsource/questrial

# Para ambiente de desenvolvimento
npm install --save-dev @types/node
npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier

npm install react react-dom typescript react-slick slick-carousel styled-components @types/react @types/react-dom @types/react-slick @types/styled-components --save
*/

interface Plan {
  name: string;
  description: string;
  benefits: string[];
  price: number;
  color: string;
}

interface PaymentMethod {
  id: string;
  name: string;
  component: React.ReactNode;
}

//estilos

function Planos() {
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(0);

  // Configurações do carrossel para slides grandes
  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "100px",
    beforeChange: (current: number, next: number) => setSelectedPlanIndex(next),
    // Personalização completa dos dots
    customPaging: (i: number) => (
      <div
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",

          backgroundColor:
            i === selectedPlanIndex ? "#ffffff" : "rgba(255, 255, 255, 0.3)",
          transition: "all 0.3s ease",
          transform: i === selectedPlanIndex ? "scale(1.4)" : "scale(1)",
        }}
      />
    ),
    appendDots: (dots: React.ReactNode[]) => (
      <div
        style={{
          marginTop: "5%",
          position: "relative",
          bottom: "-25px",
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ul
          style={{
            margin: 0,
            padding: 0,
            display: "flex",
            gap: "12px",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "80px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "40px",
        },
      },
    ],
  };

  // Dados dos planos
  const plans: Plan[] = [
    {
      name: "ÓRBITA",
      description:
        "O nosso melhor plano Lorem ipsum dolor sit amet. Et debitis laudantium ea internos inventore aut impedit iste sit expedita facere ut..",
      benefits: [
        "Benefício 1",
        "Benefício 2",
        "Benefício 3",
        "Benefício 4",
        "Benefício 5",
        "Benefício 6",
      ],
      price: 900.99,
      color: "#9B3BD2",
    },
    {
      name: "GALAXIA",
      description:
        "O nosso melhor plano Lorem ipsum dolor sit amet. Et debitis laudantium ea internos inventore aut impedit iste sit expedita facere ut..",
      benefits: [
        "Benefício 1",
        "Benefício 2",
        "Benefício 3",
        "Benefício 4",
        "Benefício 5",
        "Benefício 6",
      ],
      price: 990.99,
      color: "#9B3BD2",
    },
    {
      name: "UNIVERSO",
      description:
        "O nosso melhor plano Lorem ipsum dolor sit amet. Et debitis laudantium ea internos inventore aut impedit iste sit expedita facere ut..",
      benefits: [
        "Benefício 1",
        "Benefício 2",
        "Benefício 3",
        "Benefício 4",
        "Benefício 5",
        "Benefício 6",
      ],
      price: 1299.9,
      color: "#9B3BD2",
    },
  ];

  const selectedPlan = plans[selectedPlanIndex];

  // Métodos de pagamento
  const paymentMethods: PaymentMethod[] = [
    {
      id: "pix",
      name: "PIX",
      component: (
        <div className="pix-form">
          <h3>PLANO SELECIONADO: {selectedPlan.name}</h3>
          <p>
            PREÇO TOTAL:{" "}
            <strong>
              R$ {selectedPlan.price.toFixed(2).replace(".", ",")}
            </strong>
          </p>
          <p>Pagamento instantâneo com chave PIX</p>
          <div
            style={{
              backgroundColor: "#f0f0f0",
              height: "200px",
              width: "200px",
              left: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "20px 0",
              borderRadius: "8px",
            }}
          >
            <p style={{ color: "#333" }}>QR CODE PIX SERIA GERADO AQUI</p>
          </div>
          <button
            style={{
              backgroundColor: "#9030eb",
              fontSize: "20px",
              fontFamily: "Archivo black",
              color: "white",
              border: "none",
              padding: "12px 24px",
              borderRadius: "5px",
              cursor: "pointer",
              width: "100%",
            }}
          >
            GERAR CHAVE PIX
          </button>
        </div>
      ),
    },
    {
      id: "credit",
      name: "CARTÃO DE CRÉDITO",
      component: (
        <div className="credit-card-form">
          <h3>PLANO SELECIONADO: {selectedPlan.name}</h3>
          <p>
            PREÇO TOTAL:{" "}
            <strong>
              R$ {selectedPlan.price.toFixed(2).replace(".", ",")}
            </strong>
          </p>

          <div style={{ margin: "15px 0" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              Número do cartão:
            </label>
            <input
              type="text"
              placeholder="1234 5678 9012 3456"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ddd",
              }}
            />
          </div>

          <div style={{ margin: "15px 0" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              Nome no cartão:
            </label>
            <input
              type="text"
              placeholder="Nome como está no cartão"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ddd",
              }}
            />
          </div>

          <div style={{ display: "flex", gap: "15px", margin: "15px 0" }}>
            <div style={{ flex: 1 }}>
              <label style={{ display: "block", marginBottom: "5px" }}>
                Validade:
              </label>
              <input
                type="text"
                placeholder="MM/AA"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "4px",
                  border: "1px solid #ddd",
                }}
              />
            </div>

            <div style={{ flex: 1 }}>
              <label style={{ display: "block", marginBottom: "5px" }}>
                CVV:
              </label>
              <input
                type="text"
                placeholder="123"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "4px",
                  border: "1px solid #ddd",
                }}
              />
            </div>
          </div>

          <div style={{ margin: "20px 0" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              Parcelamento:
            </label>
            <select
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ddd",
              }}
            >
              <option>
                1x de R$ {selectedPlan.price.toFixed(2).replace(".", ",")} sem
                juros
              </option>
              <option>
                2x de R$ {(selectedPlan.price / 2).toFixed(2).replace(".", ",")}{" "}
                sem juros
              </option>
              <option>
                3x de R$ {(selectedPlan.price / 3).toFixed(2).replace(".", ",")}{" "}
                sem juros
              </option>
            </select>
          </div>

          <button
            style={{
              backgroundColor: "#9030eb",
              fontSize: "20px",
              fontFamily: "Archivo black",
              color: "white",
              border: "none",
              padding: "12px 24px",
              borderRadius: "5px",
              cursor: "pointer",
              width: "100%",
            }}
          >
            FINALIZAR COMPRA
          </button>
        </div>
      ),
    },
    {
      id: "debit",
      name: "CARTÃO DE DÉBITO",
      component: (
        <div className="debit-card-form">
          <h3>PLANO SELECIONADO: {selectedPlan.name}</h3>
          <p>
            PREÇO TOTAL:{" "}
            <strong>
              R$ {selectedPlan.price.toFixed(2).replace(".", ",")}
            </strong>
          </p>

          {/* Formulário similar ao de crédito */}
          {/* ... */}
        </div>
      ),
    },
    {
      id: "boleto",
      name: "BOLETO",
      component: (
        <div className="boleto-form">
          <h3>PLANO SELECIONADO: {selectedPlan.name}</h3>
          <p>
            PREÇO TOTAL:{" "}
            <strong>
              R$ {selectedPlan.price.toFixed(2).replace(".", ",")}
            </strong>
          </p>
          <p>Boleto com vencimento em 3 dias úteis</p>
          <button
            style={{
              backgroundColor: "#9030eb",
              fontSize: "20px",
              fontFamily: "Archivo black",
              color: "white",
              border: "none",
              padding: "12px 24px",
              borderRadius: "5px",
              cursor: "pointer",
              width: "100%",
              marginTop: "20px",
            }}
          >
            GERAR BOLETO
          </button>
        </div>
      ),
    },
  ];

  const [activePaymentMethod, setActivePaymentMethod] = useState<string | null>(
    null
  );

  return (
    <>
      <Menu />
      <div
        style={{
          maxWidth: "100vw",
          margin: "0 auto",
          padding: "20px",
          color: "#fff",
          backgroundColor: "#121212",
          minHeight: "100vh",
          fontFamily: '"Questrial", sans-serif',
          userSelect: "none",
        }}
      >
        <style>
          {`

        


          .slick-dots li button:before {
            content: none !important;
          }
          .slick-dots li {
            width: auto !important;
            height: auto !important;
            margin: 0 !important;
          }

          .slick-dots li div {
          width: 15px !important;
          height: 15px !important;
          }

          .slick-dots li.slick-active div {
      background-color: #9A30EB !important; /* Roxo quando ativo */
    }
    .slick-dots li div {
      background-color: rgb(255, 255, 255) !important; /* Roxo claro quando inativo */
    }
        `}
        </style>

        <h1
          style={{
            textAlign: "center",
            marginBottom: "50px",
            fontSize: "2.5rem",
            fontFamily: "Archivo Black",
          }}
        >
          Escolha um de nossos{" "}
          <h1
            style={{
              color: "#9A30EB",
              fontSize: "3rem",
            }}
          >
            PLANOS
          </h1>
        </h1>

        {/* Carrossel de Planos */}
        <div style={{ margin: "0 auto 60px", maxWidth: "1000px" }}>
          <Slider {...settings}>
            {plans.map((plan, index) => (
              <div
                key={index}
                style={{
                  padding: "20px",
                  outline: "none",
                }}
              >
                <div
                  style={{
                    backgroundColor: plan.color,
                    padding: "25px",
                    borderRadius:
                      selectedPlanIndex === index ? "10px" : "15px !important",
                    height: "400px",
                    color: "white",
                    boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
                    transform:
                      selectedPlanIndex === index
                        ? "scale(1.05)"
                        : "scale(0.95)",
                    transition: "all 0.3s ease",
                    opacity: selectedPlanIndex === index ? 1 : 0.8,
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                  }}
                >
                  <h2
                    style={{
                      fontSize: "2rem",
                      marginBottom: "15px",
                      fontFamily: "Archivo black",
                    }}
                  >
                    {plan.name}
                  </h2>
                  <p
                    style={{
                      marginBottom: "20px",
                      flexGrow: 1,
                      fontSize: "18px",
                    }}
                  >
                    {plan.description}
                  </p>

                  {/* Grade de benefícios - 2 linhas x 3 colunas */}
                  <div
                    className="ben-gri"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(3, 1fr)", // 3 colunas
                      gridTemplateRows: "repeat(2, auto)", // 2 linhas
                      gap: "15px",
                      marginBottom: "60px",
                      fontWeight: "bold",
                      fontSize: "20px",
                      fontFamily: "Archivo black",
                      listStyle: "none",
                    }}
                  >
                    {plan.benefits.map((benefit, i) => (
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <div
                          style={{
                            width: "25px",
                            height: "25px",
                            backgroundSize: "cover",
                            backgroundImage:
                              "url(./src/assets/check-claro2.svg)",
                          }}
                        >
                          {" "}
                        </div>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ marginTop: "auto" }}>
                    <p style={{ marginBottom: "5px", fontSize: "20px" }}>
                      No valor:
                    </p>
                    <h3 style={{ fontSize: "2.3rem", marginBottom: "20px" }}>
                      R$ {plan.price.toFixed(2).replace(".", ",")}
                    </h3>
                    <button
                      style={{
                        backgroundColor:
                          selectedPlanIndex === index ? "#fff" : "#610EA1",
                        color:
                          selectedPlanIndex === index ? "#9A30EB" : "white",
                        border: "none",
                        padding: "12px 24px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontWeight: "bold",
                        width: "100%",
                        fontSize: "1rem",
                        transition: "all 0.3s ease",
                        marginTop: "",
                      }}
                    >
                      {selectedPlanIndex === index
                        ? "PLANO SELECIONADO"
                        : "SELECIONAR ESTE PLANO"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Seção de Pagamento */}
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "0 20px",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              marginBottom: "30px",
              fontSize: "2rem",
              fontFamily: "Archivo black",
            }}
          >
            Escolha seu metodo de{" "}
            <span
              style={{
                color: "#9A30EB",
                textTransform: "uppercase",
              }}
            >
              Pagamento
            </span>
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column", // Itens em coluna
              gap: "15px",
            }}
          >
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                style={{
                  border: "1px solid #444",
                  borderRadius: "8px",
                  overflow: "hidden",
                  backgroundColor:
                    activePaymentMethod === method.id ? "#222" : "#1a1a1a",
                }}
              >
                <button
                  onClick={() =>
                    setActivePaymentMethod(
                      activePaymentMethod === method.id ? null : method.id
                    )
                  }
                  style={{
                    width: "100%",
                    padding: "15px",
                    backgroundColor: "transparent",
                    border: "none",
                    textAlign: "left",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                    color: "#fff",
                  }}
                >
                  {method.name}
                  <span style={{ fontSize: "1.5rem" }}>
                    {activePaymentMethod === method.id ? "−" : "+"}
                  </span>
                </button>

                {activePaymentMethod === method.id && (
                  <div
                    style={{
                      padding: "20px",
                      borderTop: "1px solid #444",
                    }}
                  >
                    {method.component}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Planos;
