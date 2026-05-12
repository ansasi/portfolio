/* eslint-disable react/prop-types */

const NavigationDots = ({ active }) => (
  <nav className="app__navigation" aria-label="Section navigation">
    {["home", "about", "skills", "portfolio", "experience", "contact"].map((item) => (
      <a
        href={`#${item}`}
        key={item}
        className="app__navigation-dot"
        aria-label={`Go to ${item} section`}
        aria-current={active === item ? "true" : undefined}
        style={active === item ? { backgroundColor: "#313BAC" } : {}}
      />
    ))}
  </nav>
);

export default NavigationDots;
