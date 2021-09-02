import { connect } from 'react-redux';
import { getProductById, loadProductRequest } from '../../../redux/productsRedux';
import Product from './Product';

const mapStateToProps = (state, props) => ({
  product: getProductById(state, props.match.params.id),
});

const mapDispatchToProps = dispatch => ({
  loadProduct: (props) => dispatch(loadProductRequest(props)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);