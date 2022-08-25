import React from 'react';
// import { useSelector } from 'react-redux';
import {connect} from 'react-redux';
import { Navigate, Route } from 'react-router-dom';

// HOC: 1 function có tham số là 1 component khác
const AdminRoute = (props) => {
    // const { currentUser } = useSelector(state => state.userReducer)
    const { element: Component, currentUser, ...routerProps } = props;
    return (
        // Kiểm tra xem đã đăng nhập chưa và maLoaiNguoiDung là có hợp lệ hay không
        <Route {...routerProps} render={(props) => {
            console.log(currentUser);
            if (currentUser) {
                // Đã đăng nhập
                if (currentUser.user_type === 'Admin') {
                    // Là admin
                    return <Component {...props} />
                }
                // Không phải admin
                return <Navigate to='/' />
            }
            // Chưa đăng nhập
            return <Navigate to='/auth/signIn' />
        }} />
    );
}
const mapStateToProps = (state) => {
    return {
        currentUser: state.userReducer.currentUser
    }
}

export default connect(mapStateToProps,null)(AdminRoute);

