import Item from './Item';

const App = () => {
    return (
        <div>
            <div>Hola Mundo</div>
            <Item nombre={"Jonathan"} edad={30} idioma={"inglés"} />
            <Item nombre={"Moises"} edad={20}/>
            <Item nombre={"Deivy"} edad={15} />
        </div>
    );
}

export default App;
