import { connect } from 'react-redux';
import { addOrderRequest } from '../../../redux/ordersRedux';
import FormOrder from './FormOrder';

const mapDispatchToProps = dispatch => ({
  addOrder: (order) => dispatch(addOrderRequest(order)),
});

export default connect(null, mapDispatchToProps)(FormOrder);