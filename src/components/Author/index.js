function Author({name, courses}){
    return(
        <>
            <p>Nome do Autor: {name}</p>
            <p>Curso: React</p>
            <p>Preço: {courses.price}</p>
            <p>Carga Horária: {courses.workload}</p>
        </>
    );
}

export default Author;