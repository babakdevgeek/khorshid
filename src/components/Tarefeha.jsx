import "./Tarefeha.css"

function Tarefeha() {
    return ( 
        <table className="tarefe-table">
            <thead>
                <tr>
                    <th>تعداد جلسات</th>
                    <th>قیمت</th>
                    <th>مدت زمان</th>
                    <th>رشته ی ورزشی</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>۱۲</td>
                    <td>۵۰۰ تومان</td>
                    <td>۲ ماه</td>
                    <td>بدنسازی</td>
                </tr>
                <tr>
                    <td>۲۴</td>
                    <td>۱۰۰۰ تومان</td>
                    <td>۲ ماه</td>
                    <td>بدنسازی</td>
                </tr>
            </tbody>
        </table>
     );
}

export default Tarefeha;