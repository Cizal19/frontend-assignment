import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './components/Main'



function Home() {

  const { data } = useQuery(["fetch"], getProducts);

  const products = data?.data;

  let [page, setPage] = useState(1);
  const PER_PAGE = 12;

  const pageCount = Math.ceil(products?.length / PER_PAGE);
  const _DATA = usePagination(products, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  const router = useRouter()

  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default Home
