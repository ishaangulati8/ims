--
-- PostgreSQL database dump
--

-- Dumped from database version 11.0
-- Dumped by pg_dump version 11.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: Inventories; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Inventories" (
    id integer NOT NULL,
    "productId" integer,
    "userId" integer,
    "timeAt" timestamp with time zone,
    quantity integer,
    "salePrice" integer,
    "isReturn" boolean,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Inventories" OWNER TO postgres;

--
-- Name: Inventories_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Inventories_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Inventories_id_seq" OWNER TO postgres;

--
-- Name: Inventories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Inventories_id_seq" OWNED BY public."Inventories".id;


--
-- Name: Orders; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Orders" (
    id integer NOT NULL,
    "userId" integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Orders" OWNER TO postgres;

--
-- Name: Orders_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Orders_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Orders_id_seq" OWNER TO postgres;

--
-- Name: Orders_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Orders_id_seq" OWNED BY public."Orders".id;


--
-- Name: Products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Products" (
    id integer NOT NULL,
    "productName" character varying(255),
    "Quantity" integer,
    "userId" integer,
    "salePrice" integer,
    "productDescription" text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Products" OWNER TO postgres;

--
-- Name: Products_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Products_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Products_id_seq" OWNER TO postgres;

--
-- Name: Products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Products_id_seq" OWNED BY public."Products".id;


--
-- Name: Returns; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Returns" (
    id integer NOT NULL,
    "orderId" integer,
    quantity integer,
    "productId" integer,
    date timestamp with time zone,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Returns" OWNER TO postgres;

--
-- Name: Returns_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Returns_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Returns_id_seq" OWNER TO postgres;

--
-- Name: Returns_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Returns_id_seq" OWNED BY public."Returns".id;


--
-- Name: Roles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Roles" (
    id integer NOT NULL,
    role character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Roles" OWNER TO postgres;

--
-- Name: Roles_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Roles_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Roles_id_seq" OWNER TO postgres;

--
-- Name: Roles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Roles_id_seq" OWNED BY public."Roles".id;


--
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);


ALTER TABLE public."SequelizeMeta" OWNER TO postgres;

--
-- Name: Users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Users" (
    id integer NOT NULL,
    "userName" character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    role integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Users" OWNER TO postgres;

--
-- Name: Users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Users_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Users_id_seq" OWNER TO postgres;

--
-- Name: Users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Users_id_seq" OWNED BY public."Users".id;


--
-- Name: orderItems; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."orderItems" (
    id integer NOT NULL,
    "orderId" integer,
    "productId" integer,
    "orderQuantity" integer,
    "isReturn" boolean,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."orderItems" OWNER TO postgres;

--
-- Name: orderItems_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."orderItems_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."orderItems_id_seq" OWNER TO postgres;

--
-- Name: orderItems_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."orderItems_id_seq" OWNED BY public."orderItems".id;


--
-- Name: Inventories id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Inventories" ALTER COLUMN id SET DEFAULT nextval('public."Inventories_id_seq"'::regclass);


--
-- Name: Orders id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Orders" ALTER COLUMN id SET DEFAULT nextval('public."Orders_id_seq"'::regclass);


--
-- Name: Products id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Products" ALTER COLUMN id SET DEFAULT nextval('public."Products_id_seq"'::regclass);


--
-- Name: Returns id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Returns" ALTER COLUMN id SET DEFAULT nextval('public."Returns_id_seq"'::regclass);


--
-- Name: Roles id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Roles" ALTER COLUMN id SET DEFAULT nextval('public."Roles_id_seq"'::regclass);


--
-- Name: Users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users" ALTER COLUMN id SET DEFAULT nextval('public."Users_id_seq"'::regclass);


--
-- Name: orderItems id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."orderItems" ALTER COLUMN id SET DEFAULT nextval('public."orderItems_id_seq"'::regclass);


--
-- Data for Name: Inventories; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Inventories" (id, "productId", "userId", "timeAt", quantity, "salePrice", "isReturn", "createdAt", "updatedAt") FROM stdin;
1	1	\N	2019-02-11 20:15:34.78+05:30	1	2000000	f	2019-02-11 20:15:34.78+05:30	2019-02-11 20:15:34.78+05:30
2	2	1	2019-02-11 20:16:48.421+05:30	1	2000000	f	2019-02-11 20:16:48.421+05:30	2019-02-11 20:16:48.421+05:30
3	3	1	2019-02-11 20:17:48.29+05:30	1	2000000	f	2019-02-11 20:17:48.292+05:30	2019-02-11 20:17:48.292+05:30
4	4	1	2019-02-11 20:19:03.409+05:30	1	2000000	f	2019-02-11 20:19:03.41+05:30	2019-02-11 20:19:03.41+05:30
5	5	1	2019-02-11 20:19:59.497+05:30	1	2000000	f	2019-02-11 20:19:59.498+05:30	2019-02-11 20:19:59.498+05:30
6	1	\N	2019-02-11 20:25:58.105+05:30	0	2000000	f	2019-02-11 20:25:58.108+05:30	2019-02-11 20:25:58.108+05:30
7	2	1	2019-02-11 20:29:36.885+05:30	1	2100000	f	2019-02-11 20:29:36.887+05:30	2019-02-11 20:29:36.887+05:30
8	2	1	2019-02-11 20:30:51.489+05:30	1	2100000	f	2019-02-11 20:30:51.491+05:30	2019-02-11 20:30:51.491+05:30
9	2	1	2019-02-11 20:32:02.477+05:30	1	2100000	f	2019-02-11 20:32:02.478+05:30	2019-02-11 20:32:02.478+05:30
10	2	1	2019-02-11 20:32:51.988+05:30	1	2100000	f	2019-02-11 20:32:51.989+05:30	2019-02-11 20:32:51.989+05:30
11	2	1	2019-02-11 20:34:40.723+05:30	1	2100000	f	2019-02-11 20:34:40.724+05:30	2019-02-11 20:34:40.724+05:30
12	2	1	2019-02-11 20:35:12.657+05:30	0	2100000	f	2019-02-11 20:35:12.657+05:30	2019-02-11 20:35:12.657+05:30
\.


--
-- Data for Name: Orders; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Orders" (id, "userId", "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: Products; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Products" (id, "productName", "Quantity", "userId", "salePrice", "productDescription", "createdAt", "updatedAt") FROM stdin;
3	mercedes	1	1	2000000	Kalae dhan ki maya	2019-02-11 20:17:22.268+05:30	2019-02-11 20:17:22.268+05:30
4	mercedes	1	1	2000000	Kalae dhan ki maya	2019-02-11 20:19:01.723+05:30	2019-02-11 20:19:01.723+05:30
5	mercedes	1	1	2000000	Kalae dhan ki maya	2019-02-11 20:19:58.306+05:30	2019-02-11 20:19:58.306+05:30
\.


--
-- Data for Name: Returns; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Returns" (id, "orderId", quantity, "productId", date, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: Roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Roles" (id, role, "createdAt", "updatedAt") FROM stdin;
1	Admin	2019-02-11 20:14:50.735+05:30	2019-02-11 20:14:50.735+05:30
2	Operator	2019-02-11 20:14:50.735+05:30	2019-02-11 20:14:50.735+05:30
3	Stockist	2019-02-11 20:14:50.735+05:30	2019-02-11 20:14:50.735+05:30
\.


--
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."SequelizeMeta" (name) FROM stdin;
20190131092815-create-product.js
20190131115910-create-order.js
20190131120402-create-inventory.js
20190131174218-create-order-items.js
20190131174804-create-return.js
20190201105032-create-roles.js
20190201120602-create-users.js
\.


--
-- Data for Name: Users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Users" (id, "userName", password, role, "createdAt", "updatedAt") FROM stdin;
1	admin	admin	1	2019-02-11 20:14:50.595+05:30	2019-02-11 20:14:50.595+05:30
\.


--
-- Data for Name: orderItems; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."orderItems" (id, "orderId", "productId", "orderQuantity", "isReturn", "createdAt", "updatedAt") FROM stdin;
\.


--
-- Name: Inventories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Inventories_id_seq"', 12, true);


--
-- Name: Orders_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Orders_id_seq"', 1, false);


--
-- Name: Products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Products_id_seq"', 5, true);


--
-- Name: Returns_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Returns_id_seq"', 1, false);


--
-- Name: Roles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Roles_id_seq"', 1, false);


--
-- Name: Users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Users_id_seq"', 1, false);


--
-- Name: orderItems_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."orderItems_id_seq"', 1, false);


--
-- Name: Inventories Inventories_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Inventories"
    ADD CONSTRAINT "Inventories_pkey" PRIMARY KEY (id);


--
-- Name: Orders Orders_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Orders"
    ADD CONSTRAINT "Orders_pkey" PRIMARY KEY (id);


--
-- Name: Products Products_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Products"
    ADD CONSTRAINT "Products_pkey" PRIMARY KEY (id);


--
-- Name: Returns Returns_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Returns"
    ADD CONSTRAINT "Returns_pkey" PRIMARY KEY (id);


--
-- Name: Roles Roles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Roles"
    ADD CONSTRAINT "Roles_pkey" PRIMARY KEY (id);


--
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- Name: Users Users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);


--
-- Name: Users Users_userName_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_userName_key" UNIQUE ("userName");


--
-- Name: orderItems orderItems_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."orderItems"
    ADD CONSTRAINT "orderItems_pkey" PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

