import axios from "axios";


export const consultarDatos = async (dni) => {
    const { data } = await axios.get(
      `https://dniruc.apisperu.com/api/v1/dni/${dni}?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImFyaWVzXzI0MjAxNUBob3RtYWlsLmNvbSJ9.ld2MtZJxrio5psyaeVwdA3yDe9Xf6CaAQFjDqs4Ps9U`
    );

    return data;    
  };