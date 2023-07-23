import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Unleashing the Future of Technology, Together</span>
        <span className="headerTitleLg">TechPoint</span>
      </div>
      <img
        className="headerImg"
        src="https://images.unsplash.com/photo-1505424297051-c3ad50b055ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"
        alt=""
      />
    </div>
  );
}
