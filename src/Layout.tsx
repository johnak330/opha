import "./Layout.css";

function Layout() {
  const list = [
    {
      id: 1,
      title: "LIP FILLER",
      image: "/images/filler.png",
      src: "https://frolicking-sfogliatella-7db79c.netlify.app",
    },
    {
      id: 2,
      title: "MID FACE FILLER",
      image: "/images/botox.jpg",
      src: "https://calm-bienenstitch-510d4a.netlify.app",
    },
    {
        id: 3,
        title: "NASOLABIRAL FOLDS",
        image: "/images/3.webp",
        src: "https://frolicking-sfogliatella-7db79c.netlify.app",
      },
      {
        id: 4,
        title: "NON-SURGICAL RHINOPLASTY",
        image: "/images/4.webp",
        src: "https://calm-bienenstitch-510d4a.netlify.app",
      },

      {
        id: 5,
        title: "TEAR TROUGH FILLER",
        image: "/images/5.webp",
        src: "https://frolicking-sfogliatella-7db79c.netlify.app",
      },
      {
        id: 6,
        title: "SKIN BOOSTER",
        image: "/images/6.webp",
        src: "https://calm-bienenstitch-510d4a.netlify.app",
      },

      {
        id: 7,
        title: "THE OPHA COMBO",
        image: "/images/7.png",
        src: "https://frolicking-sfogliatella-7db79c.netlify.app",
      },
      {
        id: 8,
        title: "ANTI-WRINKLE",
        image: "/images/8.jpg",
        src: "https://calm-bienenstitch-510d4a.netlify.app",
      },

      {
        id: 9,
        title: "FAT DISSOLVING",
        image: "/images/9.png",
        src: "https://frolicking-sfogliatella-7db79c.netlify.app",
      },
  
  
  ];

  return (
    <div className="layout-background">
      <div>
  <div className="col">
    {list.map((item) => ( 
        <div >
           <h5 className="card-title mt-4">{item.title}</h5>
          <img src={item.image} className="cardImg" alt="..." />
           
          </div>
      ))}
  </div> 
</div>
    </div>
  );
}

export default Layout;
