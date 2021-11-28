import Link from "next/link";
import { Container } from "./styles";

function Header() {
  return (
    <Container>
      <h1>
        <Link href="/" passHref>
          <a>Love Predict</a>
        </Link>
      </h1>
    </Container>
  );
}

export default Header;
