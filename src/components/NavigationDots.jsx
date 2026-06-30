/* eslint-disable react/prop-types */

const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {["home", "about", "skills", "portfolio", "experience", "contact"].map((item, index) => (
      <a
        href={`#${item}`}
        key={item + index}
        aria-label={item}
        aria-current={active === item ? "page" : undefined}
        className="app__navigation-dot"
        style={active === item ? { backgroundColor: "var(--secondary-color)" } : {}}
      />
    ))}
  </div>
);

export default NavigationDots;
