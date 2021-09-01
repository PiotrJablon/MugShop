import { connect } from 'react-redux';
import { getProducts, loadProductsRequest } from '../../../redux/productsRedux';
import Lineup from './Lineup';

const mapStateToProps = state => ({
  products: getProducts(state),
});

const mapDispatchToProps = dispatch => ({
  loadProducts: () => dispatch(loadProductsRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Lineup);