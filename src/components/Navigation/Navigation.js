function Navigation({ signUser }) {
  return (
    <nav>
      <ul>
        <li>
          <a>home</a>
        </li>
        <li>
          <a>saved articles</a>
        </li>
        <li>
          <a onClick={signUser}>sign in</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;