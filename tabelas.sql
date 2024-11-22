CREATE TABLE tbl_resultados(

    id_resultado INTEGER GENERATED ALWAYS AS IDENTITY,
    data_calculo TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    gasto_energia NUMBER(8,2) NOT NULL,
    gasto_gas  NUMBER(8,2) NOT NULL,
    resultado NUMBER(8,2) NOT NULL, 

    CONSTRAINT tbl_resultados_pk PRIMARY KEY(id_resultado)
);