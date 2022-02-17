import { RepositoryItem } from "./RepositoryItem";

const repository = {
    name: 'unform',
    description: 'Forms in React',
    url: 'https://github.com/Fernandosocorro/01-github-explorer'
}

export function RepositoryList () {
    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>
            <ul>
                <RepositoryItem repository= {repository}/>
            </ul>
        </section>
    );
}