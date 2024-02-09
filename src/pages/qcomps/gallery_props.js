const data = [
  {name: "Maria Skłodowska-Curie",
   src: "https://i.imgur.com/szV5sdGs.jpg",
   profession: "physicist and chemist",
   awardsCount: 4,
   awardDetails: "(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)",
   discovered: "polonium (element)"},
   {name: "Katsuko Saruhashi",
    src: "https://i.imgur.com/YfeOqp2s.jpg",
    profession: "geochemist",
    awardsCount: 2,
    awardDetails: "(Miyake Prize for geochemistry, Tanaka Prize)",
    discovered: "a method for measuring carbon dioxide in seawater"
  }
];

const BuildSection = ({id, name, src, profession, awardsCount, awardDetails, discovered}) => {
  return (
    <section key={id} className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={src}
        alt={name}
        width={70}
        height={70}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: {awardsCount} </b>
          {awardDetails}
          </li>
        <li>
          <b>Discovered: </b>
          {discovered}
        </li>
      </ul>
    </section>
  );
}
export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      {/* {data.map((item, index) => buildSection({...item, id: index}))} */}
      <BuildSection id="0" name={data[0].name} src={data[0].src} profession={data[0].profession} awardsCount={data[0].awardsCount} awardDetails={data[0].awardDetails} discovered={data[0].discovered} />
      <BuildSection id="0" name={data[1].name} src={data[1].src} profession={data[1].profession} awardsCount={data[1].awardsCount} awardDetails={data[1].awardDetails} discovered={data[1].discovered} />
    </div>
  );
}
