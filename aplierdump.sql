--
-- PostgreSQL database dump
--

-- Dumped from database version 12.1
-- Dumped by pg_dump version 12.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: candidatePositions; Type: TABLE; Schema: public; Owner: dborhara
--

CREATE TABLE public."candidatePositions" (
    applied boolean DEFAULT false,
    accepted boolean DEFAULT false,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "candidateId" integer NOT NULL,
    "companyPositionId" integer NOT NULL
);


ALTER TABLE public."candidatePositions" OWNER TO dborhara;

--
-- Name: candidateSkills; Type: TABLE; Schema: public; Owner: dborhara
--

CREATE TABLE public."candidateSkills" (
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "candidateId" integer NOT NULL,
    "skillId" integer NOT NULL
);


ALTER TABLE public."candidateSkills" OWNER TO dborhara;

--
-- Name: candidates; Type: TABLE; Schema: public; Owner: dborhara
--

CREATE TABLE public.candidates (
    id integer NOT NULL,
    "firstName" character varying(255) NOT NULL,
    "lastName" character varying(255) NOT NULL,
    address character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    phone character varying(255) NOT NULL,
    salt character varying(255),
    admin boolean DEFAULT false NOT NULL,
    intro character varying(255),
    "imgURL" text,
    "videoURL" text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.candidates OWNER TO dborhara;

--
-- Name: candidates_id_seq; Type: SEQUENCE; Schema: public; Owner: dborhara
--

CREATE SEQUENCE public.candidates_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.candidates_id_seq OWNER TO dborhara;

--
-- Name: candidates_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dborhara
--

ALTER SEQUENCE public.candidates_id_seq OWNED BY public.candidates.id;


--
-- Name: companies; Type: TABLE; Schema: public; Owner: dborhara
--

CREATE TABLE public.companies (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    location character varying(255) NOT NULL,
    industry character varying(255) NOT NULL,
    perks character varying(255),
    website character varying(255),
    "imgURL" text,
    "vidURL" text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.companies OWNER TO dborhara;

--
-- Name: companies_id_seq; Type: SEQUENCE; Schema: public; Owner: dborhara
--

CREATE SEQUENCE public.companies_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.companies_id_seq OWNER TO dborhara;

--
-- Name: companies_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dborhara
--

ALTER SEQUENCE public.companies_id_seq OWNED BY public.companies.id;


--
-- Name: companyPositions; Type: TABLE; Schema: public; Owner: dborhara
--

CREATE TABLE public."companyPositions" (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    description text NOT NULL,
    "salaryRange" character varying(255) NOT NULL,
    "datePosted" timestamp with time zone,
    "screeningQ1" text,
    "screeningQ2" text,
    "screeningQ3" text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "companyId" integer,
    "companyUserId" integer
);


ALTER TABLE public."companyPositions" OWNER TO dborhara;

--
-- Name: companyPositions_id_seq; Type: SEQUENCE; Schema: public; Owner: dborhara
--

CREATE SEQUENCE public."companyPositions_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."companyPositions_id_seq" OWNER TO dborhara;

--
-- Name: companyPositions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dborhara
--

ALTER SEQUENCE public."companyPositions_id_seq" OWNED BY public."companyPositions".id;


--
-- Name: companyUsers; Type: TABLE; Schema: public; Owner: dborhara
--

CREATE TABLE public."companyUsers" (
    id integer NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    salt character varying(255),
    "isAdmin" boolean DEFAULT false,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "companyId" integer
);


ALTER TABLE public."companyUsers" OWNER TO dborhara;

--
-- Name: companyUsers_id_seq; Type: SEQUENCE; Schema: public; Owner: dborhara
--

CREATE SEQUENCE public."companyUsers_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."companyUsers_id_seq" OWNER TO dborhara;

--
-- Name: companyUsers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dborhara
--

ALTER SEQUENCE public."companyUsers_id_seq" OWNED BY public."companyUsers".id;


--
-- Name: currentjobs; Type: TABLE; Schema: public; Owner: dborhara
--

CREATE TABLE public.currentjobs (
    id integer NOT NULL,
    "companyName" character varying(255),
    "position" character varying(255),
    "startDate" timestamp with time zone,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "candidateId" integer
);


ALTER TABLE public.currentjobs OWNER TO dborhara;

--
-- Name: currentjobs_id_seq; Type: SEQUENCE; Schema: public; Owner: dborhara
--

CREATE SEQUENCE public.currentjobs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.currentjobs_id_seq OWNER TO dborhara;

--
-- Name: currentjobs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dborhara
--

ALTER SEQUENCE public.currentjobs_id_seq OWNED BY public.currentjobs.id;


--
-- Name: education; Type: TABLE; Schema: public; Owner: dborhara
--

CREATE TABLE public.education (
    id integer NOT NULL,
    name character varying(255),
    degree character varying(255),
    major character varying(255),
    minor character varying(255),
    "gradDate" timestamp with time zone,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "candidateId" integer
);


ALTER TABLE public.education OWNER TO dborhara;

--
-- Name: education_id_seq; Type: SEQUENCE; Schema: public; Owner: dborhara
--

CREATE SEQUENCE public.education_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.education_id_seq OWNER TO dborhara;

--
-- Name: education_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dborhara
--

ALTER SEQUENCE public.education_id_seq OWNED BY public.education.id;


--
-- Name: positionsSkills; Type: TABLE; Schema: public; Owner: dborhara
--

CREATE TABLE public."positionsSkills" (
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "companyPositionId" integer NOT NULL,
    "skillId" integer NOT NULL
);


ALTER TABLE public."positionsSkills" OWNER TO dborhara;

--
-- Name: previousjobs; Type: TABLE; Schema: public; Owner: dborhara
--

CREATE TABLE public.previousjobs (
    id integer NOT NULL,
    "companyName" character varying(255),
    "position" character varying(255),
    "startDate" timestamp with time zone,
    "endDate" timestamp with time zone,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "candidateId" integer
);


ALTER TABLE public.previousjobs OWNER TO dborhara;

--
-- Name: previousjobs_id_seq; Type: SEQUENCE; Schema: public; Owner: dborhara
--

CREATE SEQUENCE public.previousjobs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.previousjobs_id_seq OWNER TO dborhara;

--
-- Name: previousjobs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dborhara
--

ALTER SEQUENCE public.previousjobs_id_seq OWNED BY public.previousjobs.id;


--
-- Name: skills; Type: TABLE; Schema: public; Owner: dborhara
--

CREATE TABLE public.skills (
    id integer NOT NULL,
    type character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.skills OWNER TO dborhara;

--
-- Name: skills_id_seq; Type: SEQUENCE; Schema: public; Owner: dborhara
--

CREATE SEQUENCE public.skills_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.skills_id_seq OWNER TO dborhara;

--
-- Name: skills_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dborhara
--

ALTER SEQUENCE public.skills_id_seq OWNED BY public.skills.id;


--
-- Name: candidates id; Type: DEFAULT; Schema: public; Owner: dborhara
--

ALTER TABLE ONLY public.candidates ALTER COLUMN id SET DEFAULT nextval('public.candidates_id_seq'::regclass);


--
-- Name: companies id; Type: DEFAULT; Schema: public; Owner: dborhara
--

ALTER TABLE ONLY public.companies ALTER COLUMN id SET DEFAULT nextval('public.companies_id_seq'::regclass);


--
-- Name: companyPositions id; Type: DEFAULT; Schema: public; Owner: dborhara
--

ALTER TABLE ONLY public."companyPositions" ALTER COLUMN id SET DEFAULT nextval('public."companyPositions_id_seq"'::regclass);


--
-- Name: companyUsers id; Type: DEFAULT; Schema: public; Owner: dborhara
--

ALTER TABLE ONLY public."companyUsers" ALTER COLUMN id SET DEFAULT nextval('public."companyUsers_id_seq"'::regclass);


--
-- Name: currentjobs id; Type: DEFAULT; Schema: public; Owner: dborhara
--

ALTER TABLE ONLY public.currentjobs ALTER COLUMN id SET DEFAULT nextval('public.currentjobs_id_seq'::regclass);


--
-- Name: education id; Type: DEFAULT; Schema: public; Owner: dborhara
--

ALTER TABLE ONLY public.education ALTER COLUMN id SET DEFAULT nextval('public.education_id_seq'::regclass);


--
-- Name: previousjobs id; Type: DEFAULT; Schema: public; Owner: dborhara
--

ALTER TABLE ONLY public.previousjobs ALTER COLUMN id SET DEFAULT nextval('public.previousjobs_id_seq'::regclass);


--
-- Name: skills id; Type: DEFAULT; Schema: public; Owner: dborhara
--

ALTER TABLE ONLY public.skills ALTER COLUMN id SET DEFAULT nextval('public.skills_id_seq'::regclass);


--
-- Data for Name: candidatePositions; Type: TABLE DATA; Schema: public; Owner: dborhara
--

COPY public."candidatePositions" (applied, accepted, "createdAt", "updatedAt", "candidateId", "companyPositionId") FROM stdin;
f	f	2020-02-06 12:04:51.905-05	2020-02-06 12:04:51.905-05	1	2
f	f	2020-02-06 12:04:51.906-05	2020-02-06 12:04:51.906-05	3	3
f	f	2020-02-06 12:04:51.906-05	2020-02-06 12:04:51.906-05	2	1
t	f	2020-02-06 12:04:51.905-05	2020-02-06 12:04:51.905-05	1	1
\.


--
-- Data for Name: candidateSkills; Type: TABLE DATA; Schema: public; Owner: dborhara
--

COPY public."candidateSkills" ("createdAt", "updatedAt", "candidateId", "skillId") FROM stdin;
2020-02-06 12:04:51.912-05	2020-02-06 12:04:51.912-05	1	2
2020-02-06 12:04:51.912-05	2020-02-06 12:04:51.912-05	1	5
2020-02-06 12:04:51.912-05	2020-02-06 12:04:51.912-05	2	2
2020-02-06 12:04:51.912-05	2020-02-06 12:04:51.912-05	2	3
2020-02-06 12:04:51.912-05	2020-02-06 12:04:51.912-05	3	4
2020-02-06 12:04:51.912-05	2020-02-06 12:04:51.912-05	3	6
2020-02-06 12:04:51.912-05	2020-02-06 12:04:51.912-05	2	1
2020-02-06 12:04:51.912-05	2020-02-06 12:04:51.912-05	1	7
2020-02-06 12:04:51.912-05	2020-02-06 12:04:51.912-05	2	4
2020-02-06 12:04:51.912-05	2020-02-06 12:04:51.912-05	3	1
2020-02-06 12:04:51.911-05	2020-02-06 12:04:51.911-05	1	1
2020-02-06 12:04:51.912-05	2020-02-06 12:04:51.912-05	3	2
\.


--
-- Data for Name: candidates; Type: TABLE DATA; Schema: public; Owner: dborhara
--

COPY public.candidates (id, "firstName", "lastName", address, email, password, phone, salt, admin, intro, "imgURL", "videoURL", "createdAt", "updatedAt") FROM stdin;
1	Tina	Fun	NYC	tina@gmail.com	87c901c4101e7a6b91e58e0d6396f5d13f38b7eb4d109428797b6f62491fc0d5	123-123-1234	z6rs493T71dcvvVqDgc/eg==	t	My name is Tina, please hire me.	https://www.vettedpetcare.com/vetted-blog/wp-content/uploads/2018/08/How-To-Travel-With-a-Super-Anxious-Cat-square.jpeg	\N	2020-02-06 12:04:51.834-05	2020-02-06 12:04:51.834-05
3	Depak	Borhara	10 w 10th Street	depak@gmail.com	6c80381773cc4eb017eeaa4e9482be6430155d4fa8bbfcaae04472d75e514dec	111-222-1234	QOPSQdWx5ibWikLjs+fzmQ==	t	React Master	https://www.vettedpetcare.com/vetted-blog/wp-content/uploads/2018/08/How-To-Travel-With-a-Super-Anxious-Cat-square.jpeg	\N	2020-02-06 12:04:51.835-05	2020-02-06 12:04:51.835-05
2	John	Doe	10 Wall Street	john@gmail.com	f65914ee6ea865a2ea799f4e1b19d09dc37d7885f7f4f6cb6801c1c366bf9483	111-123-1234	8WJfNJb0i/PPvur0M/NXPA==	f	The best dev you can ever hire	data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMVFhUXGBcVGRgXFxUYFxcXGBcXFxcXFxcYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGC0dHR0rLS0tLS0tLS0tLS0tLS0rLS0tKy0tLS0tLS0tLS0tLS0tLS0tKystLS0tLS0tLTc3Lf/AABEIAN0A5AMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAQIEBQYHAAj/xAA9EAABAwEGBAIIBQMCBwAAAAABAAIRAwQFEiExQQZRYXEigRMykaGxwdHwBxRCUuEjYvFykhYlMzRTgrL/xAAZAQADAQEBAAAAAAAAAAAAAAAAAgMBBAX/xAAiEQEBAAICAgMBAAMAAAAAAAAAAQIREiEDMRNBUSIyYXH/2gAMAwEAAhEDEQA/ALpmqMw/ei81g1yRIO6Ac3SCpFJn8JoYEem0IBGsjaVIpgJabe6KynmgEptTngFp+4TqjBhJOnNYPiu8qtmdLKpdOWeo/tOxHVFBL6vevZ3FkiowgxqSBy58lkaxbUY4ERuJmOsKS7iL0rpqN7nceW4TbXZgRjaWkbGIU7VJEC7K7CMDvC4GWuy22KkV30/1tg8wYDusg6qMyxlxO2u0iOf2Ea1UHtGbA5sat0P0KGgfmg3wuAczn+pvLoVXWygAcTSCNRB1CfXYP0kxyOyiYyMs4+fNaw38xsQkBg6IVRs+S81/NaxOpVN5yVlSfiEj1gNvoqegCe4945qY2WODxkPuQeYQFxdd8vo1qRJ8AcCfP5Lr1wXmy1UsbTJBII3kLhV6kYGvGhmOh3an8LcR1LPWYWvIBcMQ2cCYzHOFsZY+galJCwIV0XvTtDXFh9VxZ5iNwppTFRnUkIsCl4U1zFrEN1PJCIMbqY4Qg1GoCK9yYUao1BeyEAiVMLCvIAYCNTCcyijtppWmNZCPSCc1oyRo6oD1Omjsam0+qJVJDTCAouLbf6Ok5ocGl2WvPoua2qyV6zhimNJBkOA6EqdxBZ6tSs5xwPM5unDA5TvCWz2EtEuqDnAxH3lTyqmMDZc1PCJOfMggx0cNu6eLNhmIdP3onGSThBB3gj4IHo3kwBiKTakiIXMY6Yg76+0IlqLXAYSI6RvyI+auru4Yrv1aferdnAriM9VnOGmFc4tFOOvlkotSyh2n8LqL+BSN1GrcD9wfvmj5IPirnQuzEJ3+ijVLtc05jJdU/wCGmsAkdEK1XUyNEfI34XNLPRgggT95hHtzBhBGnxH381ra1zj7+qh1rmByTzOJ3xVl7Fam4TTqZtcdf2u5hVd42HDJB0Mg5TBWmvDh2AS0+RVBUlogiToml2S46XHBXGFSzRSGHC5wlzpJaCc4g+7crv8AZyHMDpmQDMRK+XG0nDxDLOey6r+FPE73PNCtUc6fVnPy0+KeUldPwJrmqQ5qG4JiotVohAc1S3iU19MQgIFRqHgUt9NBcEBGLV5EcOy8gGNajsakYzII9MdErSMajtalDU9jUB6EloJFNx3g9kQNTqnqOnPI/wAIDjTnPqV3YQPWMujrt/CtnswtgmT7B7Tqotjqf1KhdAIJkAZDNJaGvPTpyH1UMl8U67rOazsLcwNVv7i4ba2C4SovAd2NZSDiMytowQp63T5ZcZqG07K1ugAXqrAETGgVXSnutI47tR7QBqqu2VI296sa7wBkqW1kSJOinXXh6VV7WrOFV1qkhSb3eA/73VfaKoAmUqpodkgOcCmGvyhNY7NNCZCPs4cFnr5uBsT3PZadjc4Q7xs8t6QqxLKOYVWgCNCpfDFuNG1UngwMQDjGx1S3hZYccuarwYIPLP2KrmsfT9F4cxrgZBEz5JrwofDVrbVslF4jOm05aaAFTnKiYFRhSOCM/RDhAR6rFFcxTqrVHfSQEFzV5SC1eQHqY7IzCgsHmpFPTSErS4pRW9k0NRWBAIxuaI7Jrstl5oQ7fRLqT2gwS0idxIhAcps4Be7+57nH2/BHaS6pnoM+528ktKzhrsOgGXLf+ESYcHcyQufJ0YugcN1YYJV/6RZbh71fetA1+SltW47LXtBGhUYvfv5qTTZOaWpSyKBLJ0r6jXE65earbdTIcMx8ld1agA0/lUdqqEzlMFCku1FftE+k11VPbNQNY1V/elB7sJ0VaLAS8kkZIarMG6NZ8lOqWdRjQjRNKXKJdlE6qZVs80X9lEpiArmnTxUSBvsqRLJyW8dSFTWlkFaS+LIWOJOkkdZzCo7dTVIhk7j+GkG7qOUGM8oHccwtGVmPwtY4XdSl2IGSP7c/V6rUuAVInTHNTCiEpsLWA1AguClPao9RqAAlSleQDKbUdoTGhFYNkrStajBqYlbKAeAnxkU0IjUBy28srQ8aZkeWpKbZ4MZThmO+pJTeKXmnaqjf06zvnt7UFtohsRm4gdgc1DJfFs+Ha0669FqaAlZfhizEMa7mtfZwGjNR12vbrE5tPukrGAqG9+K6dEkSD5gR3WYq/iNRJz92ifX4n99tpXq5HTJVFW1AZ91QHjKlUENeM+eSr3XiHHI5c0uqvNNRabQPRg6wqE3iC8jzUq3DDQ7iViHXhgJ3JK2TYt01NptAnIqM68WjcLG2+9arhlIGn+FU+mqk/wAqmOCGXk7dSoWptQeE9FoLsdDVyi5qz2HMkdZkSui3Hai4AO9o56wQm1pnLau41uzwl7RvPxXOLaF2e/aOKg+M4EjuM1yC2jUhbE8o7L+GJ/5dSkR62Y779VpSFR/h/Ti77PpmwH/PVX6rEqYhkp5TSFrDMSFU7I2HomOYgI5C8i4AvIALW9UUDqhUyVIalaVgT2poREAgRWoQGa9a7SKdN1Q6MaXHyCGybunNvxFsjmWlr48LxPmJyj2KgstcvexnbtK1ttvalelAlrTTq0zkDBJHQjmsrctIiuwEaOaPOQoWyujhcfbsF32cMY0cgFl+JL8qBxYwGO61mOG6bLnHE1ltFV5ZRaczmQZgc8lLfa0m2WvO0szxuk7gbdys9bK1PYDPSSug2HgM05NdoqNLSA2T4Sf1AblZi8eDhTdJrF8aAsftoM1bG4/qWUy+ozTbUQZwiOhlafhwuqOaGlVttu7E5rWkMgBukT3C3PA/DxpuD3bx2MLM8po3jxu11fdItotBWQv6yMoUzUdE7TzK6NxTRBYPvRYnie7PzFnLZggZdxp5ZJcDeSXTlde21KzoBJOwHwTW13MO88pKk0rC6lUh4LXNP3orIWZjzMgk8yferbkc3G1a3O1xpsqVA+lTcYbUe0OouMkQSIc3MHPNbHh+8qbsTXABzDBwuy/1AjVpCpriuqgGA1sGESc8wB0BMewKKyz0/TudZvDT01kZdvVCW08l+3T2w5p3BHuhcbvGnk5o/e4dcl1253ywAnMZc1gbLZWi8Hsf6ge7XzctjMo3HAF/tNKjZXtDHhkMGKS4N1MQtnC5dd9pay+rM0aOpuHaWuj/AOfeuoPHJPin5MeN6ecQmBwXiF4nonTNcEF7SjEpjm5IABavJxJXkAJqMAhU0YFK0sJyQLzkA5kyot+0sdmrNO9Nw9ylNKWszE1w5gj3LL6NhdZSsTwBcgFnLnZYtDvGWarHUwbzaGmW+tI0kGPkrHia3/lqTKDSQ7AJjzVNwxSNOtRdUEYsThPUrkl9vQ8uP3/t0yoUF7RAnyAzcewXg+T95qys9AATudSlk3SXLjGTvmz1yP6RcDycGn4LKWzh+31HQXNHPWV1d4bCqrZbg0HCM+ybWj45cvpjbk4HFM4qpxuPP6LXWezAEQNE2zHKXnM7fJT6I6I9tt0r+JaQwLG0nzI2nutlxY+KJWIu8g5zuqT2Tf8AKBxDZqbjLmgjSRqMtVm33OwmRmtZf94MbSBDJzId8iqSyWhhghNSYyVFo3Hn6zoy/wAK2u+7g05GDsR8xoQjseIU2ynNLs/GRpbjHhiIcNRt3HQrJ8UE0LWao2h3fSQVtrpALZ5ZeSy3G1IO/MudkGsDWnm8wQB7089IX2Fc9jbaLwsdqo5NBeHj9paxxHlmQuqVCuL/AIQWyp+dwZlha4nkDBg/Jdnec1TD0n5v8jMSTEiNCY4J0SOTHJwCa5ADheTsSVARgjNKA0otMpWiApxTYXnuhAOCe1M1ThkgMpxFcXp67XDxERLDyG/ZBv2w4xSe0gOouaMt26EfBaytSBMnkc+Sy9vq1TAgQARI1K5Mpxr0Jnzx/wCLa7asgE/ZhW4tAhZq7KnhB5n4hMtd6Q4tac/gknTJNre3W4aSspfF+EHBTEu+9VFvi9cAic0Ph9mKXnU5p9KSydLnhenUNbHXJPhJA2GY960lW96bXQM1WU2At8UQRGsduy59xBc1Vj8dO01MMyPFoiFy02vFl9MIwzlG6prlsLHMNVzobOXM9Z2VFUtP5hrRUe3G3InQO5H6qxtF9WemxtGG1ANTtPzVMYTKzXSztV32dzKhNVvo8Bmdsj71zCxPIAMq6vCuytVNQkZ7TAjbJRXWYa89PNPYnMkmz2laG4xjcsTUqFh6La8E1xUdAzKXRuW28srQ1uHeFkLzoGu8/wBQgNrFxEa6NHeM/arYW8m2OpN0ZTBPc5/CE+4OHH1AHuGFrnF0ncSdBqVs7JvXaVwhdIZWqVQxrWzAgZuPNaqrmlp0w1oaBAC8rSac+WXK7NaF4rxKbiWlJCY8Ix02QnIBmFeSEpUBDpozUJjxyRAlaM0pZTWuyTkArU8JjQntCAUKvtd0B2bDhPtb7NlYJwKy4y+zY5XH0xtCm6mS12rH59eyDQaGG0VHZwAR5z81a32IqOPMNPtET7lWMcHYmE/9RseYMrjymstOzx5bm3NKltdUqlztJ0+q6DcdDGwYSBIHzlY+1cP4a0CcJKJefDNqYzHRrVI1wgwfLmq3V6LJd2uiVrAcMOqADyCorzuVr8jXbHQrPcF3VXtbDNpdLXYXNd6wzg6+Sv6vBVrAMVQYdAnllmfak9XWzy4/bJ23hjCTFZpHfP4qgtd34TAqA+crXXpwXag7xPa7zKdc/BdQ1GtJG5PYck8yn6XKYqW5rtJIxOymYAOfdaw2WzsaPSVWjL9RAgRyVjbbtoWRld9R/haQxh1MkSfPVcQp2F9aoIlznRrmZPdUnaVsnpo+Ia9EvikZaN/vZW/4aNf+ZbGkn4ZrI07FgdhOoMFdL4RsvoKD65GcYWdSRmUZVmPvaxuA47Taq2znEN7DIfALpVkaRSYDrhb8AsJw9ZgxgZu4+ZldAfkITYE8gZOaY6Uj3JqomUJF7ClDUAxxTHJ1QpmLLqgGFpXk1xcV5DEZjUdqAxEStFaeaI0ITCiIB5K8EgSwgFwp7ITSUrQgKjiRhhjgBu0nvm35+1ZG0OcMxz+4W5vqnioubz0PI7FYam8k4XGCJBHIzqubyz+nT4b/ACnvYKjQ/ca/JWlihzIOyqbPO5J5xuFaUaUAOGh1UtuiIFtuWk5/pMT6VT/yU3FuL/UBk7bUJtrsdaXkWiocbp8NbQAQAGkKzrVAJnZZK+GOkmm4jfWE8uzax+0e8a9sxf8AcVC7FoRTIjbRuaobxr25wwurkAOxDCQ0zBEy0A6EpLTaKwOb3KLicYLiSqSEy+Mey3NWrBra1Vz2AlwDiSSTv1PUrVXVdFOg2Q0YtO2+ShXDaActFYW+2ahupEBPtGsrTu709reG5NxRPx+a3FcN8LBlTZDY5nmfYoF2WJtMZDxkZHnzVi6Gg4ts57f4S3sq+4doB9Uf2HHryEfEhamsVX8M2cCiKmHC5+fWNh81NqlVxmojld0Jy9OyQtSwnKRxTXOTiUNxQwxyG5EdCE4LAY0fcpUjjCVaETEih+iDT/lPYM0rR2uTwUIZozQEAVpTpTGlOlALCc0IeIojRugAXg2abljL1s0H0jdRGIfuaM/9wW4tQmm5ZypTB+C5vP1lHT4e5UWyVWuEjMxORIyVvdrmubhMg8lQ17MabsTBnmSOfMg7FNu2+gKhzyMSDlB5RsVOTatul1eNk1B0WZvK5nu9WfatFXvNsZmd+sHZR614iDnkj0fltgLbcNWSc/vRQBc9YyTprqtjar6YwnOTCp694F8HEAzvz5wqTKksiJd1JzBnkFYXc0vfiIETz0Cr/wA0HOzdDRtz5K/slZjaZc7KIO0dJKebpMrImmo1tSNQBGmUkTqhMGMgkQAdOZ69JQqLCZc6AHGQM5/9vYn03eIDqikkdJup39Fnb5lPKi3W7+izPY/FHJVp6QvsnZISvTCQuTMeKGc0uJI9yGEchPKV7yhPOSAYSkQi7uvIANF55ooOaj0njRGM7fYStSGn2p4PVB5IwKAKwogKFPNK1yAMnYgo5cnsdOW6AdaneB3YqhY5WFW8qb2vax2KMiQDE8p3VfSK5PPlLenX4cbJ2FbBlM56DuVlbxsYJJaYfsRln15rWWlojVVLrHLpjyO3ZTxulcsdxkql6VGEtqiI0Ox6zsgvv0kAbZe3P6q64gs2vIfDl26LIWmkwHMR/pV5ZUbLA7bbnOOWmZTBbXEQ33pG02iYeYO0A+9TrvsVNxzLj7BseQT9E/oGxgkyZnkMyc9B1Wmstkw4XVRpmKfI/ucOfREuyhTpeJrQD0En2qBaLa41Jccvf/lZv8Gv1bNtBLjrEz2Umm7xZKvounTRTqWyUzoFwVJogTmJn2qcQudWm1VGN/p1HMMRLTBH1VpwFxDWrsrMtTml9J4bjEDEHCQSBkNlbDL6Ryx1215TZyXimvPNUIWSM9UxzpSFyY5DDXjkEN7+iWrU6qO8oB2I8l5AJXkBGYQiscooy0KPTKVqUCjRGajMMIhf1QEhridl51SFFNWchmeQzRGWaSMf+0a+Z2WW6borauIw2SnX/Z3sslTAYqPDWYh+lr3BriOoBKtaTA0AAAdAm21mOlUZuWmO8Ze+EmV3DYztnLLZ2U6YYwQ1oAH17rzcim0K0tB05ppfK4XdDa7p+4Qn1RpHvTq1bp5j6qtr1wfsn4rY0a8qQc3NYi87CJMLUVrU6OYVBa3gnl5qmOyZMjaKBBU+5nOBUi22fkmUSW6K29pWaq+o1MIM66x9VTuBe6Sc/wCdklS07A9ym2d0lbGLyxP2Vq05Kos0RCn0K2WayhLtNQYSTsFXXJIslWqMnVqnh7A4W/BevEmowUmHxVCGDoD6x7ASre00mt9HRb6tIDLro0fNNhCZ36WNXiN1Cm1xGICAR7BIVxZ79pPiThkYgSciD1WD4if/AEw0ag+xANYtoUzuJHWFTaWnUwQ4S0g9QZlDeVx9t51GPxUnuZ2Jj2aLY8O8Y4xgrCXgaiPEN8ua2ZCxp3nPJDeSh0rfSqHwPBP7Z8Q8jmlfI7JivFeQXvzzXkBDa7JSGujuoTSpV20A98EmBnHPolaPRJOQBPb6qVSsbj6/hHkSfJV9qtrvTNpMhjeiugZOejRop8z8TbXaGUGS0eIjXdCuck+I6lZ68bSX1oOgWquikMEpN7ptaiVVfojUiNVFqleY7VaVT31Z/RVHEeo84h0P6h7c/NVtStGi2FooiowsdofaDsR1WBtfhJGsEiexhc/kx1dunx5bmjqlb7JVdaKw3+/MIlSooloOqyKWhVK/VVdqcJRKz+ihV9FWQlqPVrKK6runPUeoE8JSuq8u6lWGpuq5ym0CtYubNWUl9tAyAlxMBo1J+iz9S1FpaBqTE/ON1o7DZm0GGr6741d8uQWyEuSfYqPoBiccVZ/saP2t5Ac90UWkDM5knLqearfSk4nOzOGT16dAo1SsSA47+4cgnTS7xfLfiqupaJbh5KRVf4CqyUNEanMeWkOGozTUrlgW1ptDnM9JTJBGsHNp5jopV1cZVGkNrjG3936h16qksdcsdlvkRzTrys4a7LQ5wt2zTpNlt1Ko0PZUaQeZg+YK8uSuC8m5Di//2Q==	\N	2020-02-06 12:04:51.835-05	2020-02-06 12:04:51.835-05
4	Remi	Mendoza	Bronx New York	remi@gmail.com	7e4e100637ca5987498ac4c963ca6a9b9df6627c5dcc9946fbe4d679d2dc6434	646-646-6464	K2iowQMfRj9JJuP8JPyx7g==	t	React-Native Master	https://www.vettedpetcare.com/vetted-blog/wp-content/uploads/2018/08/How-To-Travel-With-a-Super-Anxious-Cat-square.jpeg	\N	2020-02-06 12:04:51.835-05	2020-02-06 12:04:51.835-05
\.


--
-- Data for Name: companies; Type: TABLE DATA; Schema: public; Owner: dborhara
--

COPY public.companies (id, name, location, industry, perks, website, "imgURL", "vidURL", "createdAt", "updatedAt") FROM stdin;
1	Google	111 8th Avenue, NY 10011	Tech	free Lunch	google.com	\N	\N	2020-02-06 12:04:51.867-05	2020-02-06 12:04:51.867-05
2	Twitter	249 West 17th Street, NY 10011	Tech	Summer Fridays	twitter.com	\N	\N	2020-02-06 12:04:51.867-05	2020-02-06 12:04:51.867-05
3	Facebook	770 Broadway, New York, NY 10003	Tech	Unlimited Pizza	facebook.com	\N	\N	2020-02-06 12:04:51.867-05	2020-02-06 12:04:51.867-05
4	VaynerMedia	10 Hudson yards, New York, NY 10001	Tech	6 months parental leave	vaynerMedia.com	\N	\N	2020-02-06 12:04:51.867-05	2020-02-06 12:04:51.867-05
\.


--
-- Data for Name: companyPositions; Type: TABLE DATA; Schema: public; Owner: dborhara
--

COPY public."companyPositions" (id, title, description, "salaryRange", "datePosted", "screeningQ1", "screeningQ2", "screeningQ3", "createdAt", "updatedAt", "companyId", "companyUserId") FROM stdin;
1	Front-End Developer	Looking for a Front-End Developer. skilled in frameworks such as React or Angular based in the New York City area!	$85,0000	\N	What are JavaScript Data Types?	What is Recursion?	Explain the difference between "==" and "==="?	2020-02-06 12:04:51.88-05	2020-02-06 12:04:51.88-05	1	3
2	Front-End Developer	Looking for a Back-End Developer. skilled in Javascript Concepts	$95,0000	\N	Explain what is pop()method in JavaScript?	Explain OOP?	explain closures in JavaScript?	2020-02-06 12:04:51.88-05	2020-02-06 12:04:51.88-05	3	1
3	React-Native Developer	Looking for a React-Native Developer. skilled in Javascript Concepts	$75,0000	\N	What are the advantages of React Native?	How many threads run in React Native?	What are Hybrid Apps?	2020-02-06 12:04:51.88-05	2020-02-06 12:04:51.88-05	3	1
\.


--
-- Data for Name: companyUsers; Type: TABLE DATA; Schema: public; Owner: dborhara
--

COPY public."companyUsers" (id, email, password, salt, "isAdmin", "createdAt", "updatedAt", "companyId") FROM stdin;
1	employee@gmail.com	7073df847511b3bc85a942ac45e910a2d61d7b04e16ec37231a284fe62f176d2	WlGlF3tbKOYqIg5Z3JwtgA==	f	2020-02-06 12:04:51.873-05	2020-02-06 12:04:51.873-05	3
3	employee3@gmail.com	a9bf939459d83fe20715e126357faa7916b8dcf13cfb4513f0134b3e6cfbe7f8	Rtm0/GK5FK+V8ujWSkDRJQ==	f	2020-02-06 12:04:51.874-05	2020-02-06 12:04:51.874-05	1
4	employee4@gmail.com	33180e5092c1e5c4970aad9b54ac148faaa86ced59ead779542d86c6e661a69d	gYcOYFCxn2FYwZClRmjWAw==	f	2020-02-06 12:04:51.874-05	2020-02-06 12:04:51.874-05	4
2	employee2@gmail.com	4e2ae0c18a11a72aeb6ba003e1069ff292b25e0005e6931cbd89e4612c441f48	cFDIE2N61hPjWvj3CdNMIw==	f	2020-02-06 12:04:51.874-05	2020-02-06 12:04:51.874-05	2
\.


--
-- Data for Name: currentjobs; Type: TABLE DATA; Schema: public; Owner: dborhara
--

COPY public.currentjobs (id, "companyName", "position", "startDate", "createdAt", "updatedAt", "candidateId") FROM stdin;
2	Facebook	Senior Software Developer	2019-03-02 00:00:00-05	2020-02-06 12:04:51.857-05	2020-02-06 12:04:51.857-05	2
3	Apple	Fullstack Developer	2018-03-02 00:00:00-05	2020-02-06 12:04:51.858-05	2020-02-06 12:04:51.858-05	4
4	Google	Backend Developer	2018-03-02 00:00:00-05	2020-02-06 12:04:51.857-05	2020-02-06 12:04:51.857-05	3
1	Amazon	Software Developer	2018-02-01 00:00:00-05	2020-02-06 12:04:51.857-05	2020-02-06 12:04:51.857-05	1
\.


--
-- Data for Name: education; Type: TABLE DATA; Schema: public; Owner: dborhara
--

COPY public.education (id, name, degree, major, minor, "gradDate", "createdAt", "updatedAt", "candidateId") FROM stdin;
1	Parsons the New School for Design	BBA	Strategic Design and Management	Economics	2015-06-30 00:00:00-04	2020-02-06 12:04:51.885-05	2020-02-06 12:04:51.885-05	1
3	City University of New York City College	Bachelor	Political Science and Governmenet	\N	2014-06-30 00:00:00-04	2020-02-06 12:04:51.886-05	2020-02-06 12:04:51.886-05	3
2	MIT	AB	Computer Science	\N	2006-06-30 00:00:00-04	2020-02-06 12:04:51.886-05	2020-02-06 12:04:51.886-05	2
\.


--
-- Data for Name: positionsSkills; Type: TABLE DATA; Schema: public; Owner: dborhara
--

COPY public."positionsSkills" ("createdAt", "updatedAt", "companyPositionId", "skillId") FROM stdin;
2020-02-06 12:04:51.924-05	2020-02-06 12:04:51.924-05	1	1
2020-02-06 12:04:51.924-05	2020-02-06 12:04:51.924-05	1	2
2020-02-06 12:04:51.925-05	2020-02-06 12:04:51.925-05	1	5
2020-02-06 12:04:51.925-05	2020-02-06 12:04:51.925-05	1	7
2020-02-06 12:04:51.925-05	2020-02-06 12:04:51.925-05	2	1
2020-02-06 12:04:51.925-05	2020-02-06 12:04:51.925-05	2	2
2020-02-06 12:04:51.925-05	2020-02-06 12:04:51.925-05	2	3
2020-02-06 12:04:51.925-05	2020-02-06 12:04:51.925-05	2	4
2020-02-06 12:04:51.925-05	2020-02-06 12:04:51.925-05	3	1
2020-02-06 12:04:51.925-05	2020-02-06 12:04:51.925-05	3	2
2020-02-06 12:04:51.925-05	2020-02-06 12:04:51.925-05	3	4
2020-02-06 12:04:51.925-05	2020-02-06 12:04:51.925-05	3	6
\.


--
-- Data for Name: previousjobs; Type: TABLE DATA; Schema: public; Owner: dborhara
--

COPY public.previousjobs (id, "companyName", "position", "startDate", "endDate", "createdAt", "updatedAt", "candidateId") FROM stdin;
1	Apple	Software Developer	2015-02-01 00:00:00-05	2018-01-01 00:00:00-05	2020-02-06 12:04:51.891-05	2020-02-06 12:04:51.891-05	2
\.


--
-- Data for Name: skills; Type: TABLE DATA; Schema: public; Owner: dborhara
--

COPY public.skills (id, type, "createdAt", "updatedAt") FROM stdin;
1	JavaScript	2020-02-06 12:04:51.895-05	2020-02-06 12:04:51.895-05
3	Ruby	2020-02-06 12:04:51.895-05	2020-02-06 12:04:51.895-05
2	React	2020-02-06 12:04:51.895-05	2020-02-06 12:04:51.895-05
4	Python	2020-02-06 12:04:51.895-05	2020-02-06 12:04:51.895-05
5	Redux	2020-02-06 12:04:51.895-05	2020-02-06 12:04:51.895-05
6	C++	2020-02-06 12:04:51.895-05	2020-02-06 12:04:51.895-05
7	CSS	2020-02-06 12:04:51.895-05	2020-02-06 12:04:51.895-05
8	React-Native	2020-02-06 12:04:51.895-05	2020-02-06 12:04:51.895-05
\.


--
-- Name: candidates_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dborhara
--

SELECT pg_catalog.setval('public.candidates_id_seq', 4, true);


--
-- Name: companies_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dborhara
--

SELECT pg_catalog.setval('public.companies_id_seq', 4, true);


--
-- Name: companyPositions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dborhara
--

SELECT pg_catalog.setval('public."companyPositions_id_seq"', 3, true);


--
-- Name: companyUsers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dborhara
--

SELECT pg_catalog.setval('public."companyUsers_id_seq"', 4, true);


--
-- Name: currentjobs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dborhara
--

SELECT pg_catalog.setval('public.currentjobs_id_seq', 4, true);


--
-- Name: education_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dborhara
--

SELECT pg_catalog.setval('public.education_id_seq', 3, true);


--
-- Name: previousjobs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dborhara
--

SELECT pg_catalog.setval('public.previousjobs_id_seq', 1, true);


--
-- Name: skills_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dborhara
--

SELECT pg_catalog.setval('public.skills_id_seq', 8, true);


--
-- Name: candidatePositions candidatePositions_pkey; Type: CONSTRAINT; Schema: public; Owner: dborhara
--

ALTER TABLE ONLY public."candidatePositions"
    ADD CONSTRAINT "candidatePositions_pkey" PRIMARY KEY ("candidateId", "companyPositionId");


--
-- Name: candidateSkills candidateSkills_pkey; Type: CONSTRAINT; Schema: public; Owner: dborhara
--

ALTER TABLE ONLY public."candidateSkills"
    ADD CONSTRAINT "candidateSkills_pkey" PRIMARY KEY ("candidateId", "skillId");


--
-- Name: candidates candidates_email_key; Type: CONSTRAINT; Schema: public; Owner: dborhara
--

ALTER TABLE ONLY public.candidates
    ADD CONSTRAINT candidates_email_key UNIQUE (email);


--
-- Name: candidates candidates_pkey; Type: CONSTRAINT; Schema: public; Owner: dborhara
--

ALTER TABLE ONLY public.candidates
    ADD CONSTRAINT candidates_pkey PRIMARY KEY (id);


--
-- Name: companies companies_pkey; Type: CONSTRAINT; Schema: public; Owner: dborhara
--

ALTER TABLE ONLY public.companies
    ADD CONSTRAINT companies_pkey PRIMARY KEY (id);


--
-- Name: companyPositions companyPositions_pkey; Type: CONSTRAINT; Schema: public; Owner: dborhara
--

ALTER TABLE ONLY public."companyPositions"
    ADD CONSTRAINT "companyPositions_pkey" PRIMARY KEY (id);


--
-- Name: companyUsers companyUsers_pkey; Type: CONSTRAINT; Schema: public; Owner: dborhara
--

ALTER TABLE ONLY public."companyUsers"
    ADD CONSTRAINT "companyUsers_pkey" PRIMARY KEY (id);


--
-- Name: currentjobs currentjobs_pkey; Type: CONSTRAINT; Schema: public; Owner: dborhara
--

ALTER TABLE ONLY public.currentjobs
    ADD CONSTRAINT currentjobs_pkey PRIMARY KEY (id);


--
-- Name: education education_pkey; Type: CONSTRAINT; Schema: public; Owner: dborhara
--

ALTER TABLE ONLY public.education
    ADD CONSTRAINT education_pkey PRIMARY KEY (id);


--
-- Name: positionsSkills positionsSkills_pkey; Type: CONSTRAINT; Schema: public; Owner: dborhara
--

ALTER TABLE ONLY public."positionsSkills"
    ADD CONSTRAINT "positionsSkills_pkey" PRIMARY KEY ("companyPositionId", "skillId");


--
-- Name: previousjobs previousjobs_pkey; Type: CONSTRAINT; Schema: public; Owner: dborhara
--

ALTER TABLE ONLY public.previousjobs
    ADD CONSTRAINT previousjobs_pkey PRIMARY KEY (id);


--
-- Name: skills skills_pkey; Type: CONSTRAINT; Schema: public; Owner: dborhara
--

ALTER TABLE ONLY public.skills
    ADD CONSTRAINT skills_pkey PRIMARY KEY (id);


--
-- Name: candidatePositions candidatePositions_candidateId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dborhara
--

ALTER TABLE ONLY public."candidatePositions"
    ADD CONSTRAINT "candidatePositions_candidateId_fkey" FOREIGN KEY ("candidateId") REFERENCES public.candidates(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: candidatePositions candidatePositions_companyPositionId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dborhara
--

ALTER TABLE ONLY public."candidatePositions"
    ADD CONSTRAINT "candidatePositions_companyPositionId_fkey" FOREIGN KEY ("companyPositionId") REFERENCES public."companyPositions"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: candidateSkills candidateSkills_candidateId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dborhara
--

ALTER TABLE ONLY public."candidateSkills"
    ADD CONSTRAINT "candidateSkills_candidateId_fkey" FOREIGN KEY ("candidateId") REFERENCES public.candidates(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: candidateSkills candidateSkills_skillId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dborhara
--

ALTER TABLE ONLY public."candidateSkills"
    ADD CONSTRAINT "candidateSkills_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES public.skills(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: companyPositions companyPositions_companyId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dborhara
--

ALTER TABLE ONLY public."companyPositions"
    ADD CONSTRAINT "companyPositions_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES public.companies(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: companyPositions companyPositions_companyUserId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dborhara
--

ALTER TABLE ONLY public."companyPositions"
    ADD CONSTRAINT "companyPositions_companyUserId_fkey" FOREIGN KEY ("companyUserId") REFERENCES public."companyUsers"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: companyUsers companyUsers_companyId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dborhara
--

ALTER TABLE ONLY public."companyUsers"
    ADD CONSTRAINT "companyUsers_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES public.companies(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: currentjobs currentjobs_candidateId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dborhara
--

ALTER TABLE ONLY public.currentjobs
    ADD CONSTRAINT "currentjobs_candidateId_fkey" FOREIGN KEY ("candidateId") REFERENCES public.candidates(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: education education_candidateId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dborhara
--

ALTER TABLE ONLY public.education
    ADD CONSTRAINT "education_candidateId_fkey" FOREIGN KEY ("candidateId") REFERENCES public.candidates(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: positionsSkills positionsSkills_companyPositionId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dborhara
--

ALTER TABLE ONLY public."positionsSkills"
    ADD CONSTRAINT "positionsSkills_companyPositionId_fkey" FOREIGN KEY ("companyPositionId") REFERENCES public."companyPositions"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: positionsSkills positionsSkills_skillId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dborhara
--

ALTER TABLE ONLY public."positionsSkills"
    ADD CONSTRAINT "positionsSkills_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES public.skills(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: previousjobs previousjobs_candidateId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dborhara
--

ALTER TABLE ONLY public.previousjobs
    ADD CONSTRAINT "previousjobs_candidateId_fkey" FOREIGN KEY ("candidateId") REFERENCES public.candidates(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- PostgreSQL database dump complete
--

