/* eslint-disable react/prop-types */

const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {["home", "about", "skills", "portfolio", "experience", "contact"].map((item, index) => (
      <a
        href={`#${item}`}
        key={item + index}
        className="app__navigation-dot"
        style={active === item ? { backgroundColor: "#313BAC" } : {}}
      />
    ))}
  </div>
);

export default NavigationDots;
