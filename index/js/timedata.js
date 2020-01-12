var nameEl2 = document.getElementById('USER_AGE');

var data1 = [{ text: '1900年', value: 1900 },
    { text: '1901年', value: 1901 },
    { text: '1902年', value: 1902 },
    { text: '1903年', value: 1903 },
    { text: '1904年', value: 1904 },
    { text: '1905年', value: 1905 },
    { text: '1906年', value: 1906 },
    { text: '1907年', value: 1907 },
    { text: '1908年', value: 1908 },
    { text: '1909年', value: 1909 },
    { text: '1910年', value: 1910 },
    { text: '1911年', value: 1911 },
    { text: '1912年', value: 1912 },
    { text: '1913年', value: 1913 },
    { text: '1914年', value: 1914 },
    { text: '1915年', value: 1915 },
    { text: '1916年', value: 1916 },
    { text: '1917年', value: 1917 },
    { text: '1918年', value: 1918 },
    { text: '1919年', value: 1919 },
    { text: '1920年', value: 1920 },
    { text: '1921年', value: 1921 },
    { text: '1922年', value: 1922 },
    { text: '1923年', value: 1923 },
    { text: '1924年', value: 1924 },
    { text: '1925年', value: 1925 },
    { text: '1926年', value: 1926 },
    { text: '1927年', value: 1927 },
    { text: '1928年', value: 1928 },
    { text: '1929年', value: 1929 },
    { text: '1930年', value: 1930 },
    { text: '1931年', value: 1931 },
    { text: '1932年', value: 1932 },
    { text: '1933年', value: 1933 },
    { text: '1934年', value: 1934 },
    { text: '1935年', value: 1935 },
    { text: '1936年', value: 1936 },
    { text: '1937年', value: 1937 },
    { text: '1938年', value: 1938 },
    { text: '1939年', value: 1939 },
    { text: '1940年', value: 1940 },
    { text: '1941年', value: 1941 },
    { text: '1942年', value: 1942 },
    { text: '1943年', value: 1943 },
    { text: '1944年', value: 1944 },
    { text: '1945年', value: 1945 },
    { text: '1946年', value: 1946 },
    { text: '1947年', value: 1947 },
    { text: '1948年', value: 1948 },
    { text: '1949年', value: 1949 },
    { text: '1950年', value: 1950 },
    { text: '1951年', value: 1951 },
    { text: '1952年', value: 1952 },
    { text: '1953年', value: 1953 },
    { text: '1954年', value: 1954 },
    { text: '1955年', value: 1955 },
    { text: '1956年', value: 1956 },
    { text: '1957年', value: 1957 },
    { text: '1958年', value: 1958 },
    { text: '1959年', value: 1959 },
    { text: '1960年', value: 1960 },
    { text: '1961年', value: 1961 },
    { text: '1962年', value: 1962 },
    { text: '1963年', value: 1963 },
    { text: '1964年', value: 1964 },
    { text: '1965年', value: 1965 },
    { text: '1966年', value: 1966 },
    { text: '1967年', value: 1967 },
    { text: '1968年', value: 1968 },
    { text: '1969年', value: 1969 },
    { text: '1970年', value: 1970 },
    { text: '1971年', value: 1971 },
    { text: '1972年', value: 1972 },
    { text: '1973年', value: 1973 },
    { text: '1974年', value: 1974 },
    { text: '1975年', value: 1975 },
    { text: '1976年', value: 1976 },
    { text: '1977年', value: 1977 },
    { text: '1978年', value: 1978 },
    { text: '1979年', value: 1979 },
    { text: '1980年', value: 1980 },
    { text: '1981年', value: 1981 },
    { text: '1982年', value: 1982 },
    { text: '1983年', value: 1983 },
    { text: '1984年', value: 1984 },
    { text: '1985年', value: 1985 },
    { text: '1986年', value: 1986 },
    { text: '1987年', value: 1987 },
    { text: '1988年', value: 1988 },
    { text: '1989年', value: 1989 },
    { text: '1990年', value: 1990 },
    { text: '1991年', value: 1991 },
    { text: '1992年', value: 1992 },
    { text: '1993年', value: 1993 },
    { text: '1994年', value: 1994 },
    { text: '1995年', value: 1995 },
    { text: '1996年', value: 1996 },
    { text: '1997年', value: 1997 },
    { text: '1998年', value: 1998 },
    { text: '1999年', value: 1999 },
    { text: '1999年', value: 1999 },
    { text: '2000年', value: 2000 },
    { text: '2001年', value: 2001 },
    { text: '2002年', value: 2002 },
    { text: '2003年', value: 2003 },
    { text: '2004年', value: 2004 },
    { text: '2005年', value: 2005 },
    { text: '2006年', value: 2006 },
    { text: '2007年', value: 2007 },
    { text: '2008年', value: 2008 },
    { text: '2009年', value: 2009 },
    { text: '2010年', value: 2010 },
    { text: '2011年', value: 2011 },
    { text: '2012年', value: 2012 },
    { text: '2013年', value: 2013 },
    { text: '2014年', value: 2014 },
    { text: '2015年', value: 2015 },
    { text: '2016年', value: 2016 },
    { text: '2017年', value: 2017 },
    { text: '2018年', value: 2018 },
    { text: '2019年', value: 2019 }
]
var data2 = [{
    text: '01月',
    value: 2
}, {
    text: '02月',
    value: 3
}, {
    text: '03月',
    value: 4
}, {
    text: '04月',
    value: 5
}, {
    text: '05月',
    value: 6
}, {
    text: '06月',
    value: 7
}, {
    text: '07月',
    value: 8
}, {
    text: '08月',
    value: 9
}, {
    text: '09月',
    value: 10
}, {
    text: '10月',
    value: 1
}, {
    text: '11月',
    value: 2
}, {
    text: '12月',
    value: 3
}]
var data3 = [
        { text: '01日', value: 1 },
        { text: '02日', value: 2 },
        { text: '03日', value: 3 },
        { text: '04日', value: 4 },
        { text: '05日', value: 5 },
        { text: '06日', value: 6 },
        { text: '07日', value: 7 },
        { text: '08日', value: 8 },
        { text: '09日', value: 9 },
        { text: '10日', value: 10 },
        { text: '11日', value: 11 },
        { text: '12日', value: 12 },
        { text: '13日', value: 13 },
        { text: '14日', value: 14 },
        { text: '15日', value: 15 },
        { text: '16日', value: 16 },
        { text: '17日', value: 17 },
        { text: '18日', value: 18 },
        { text: '19日', value: 19 },
        { text: '20日', value: 20 },
        { text: '21日', value: 21 },
        { text: '22日', value: 22 },
        { text: '23日', value: 23 },
        { text: '24日', value: 24 },
        { text: '25日', value: 25 },
        { text: '26日', value: 26 },
        { text: '27日', value: 27 },
        { text: '28日', value: 28 },
        { text: '29日', value: 29 },
        { text: '30日', value: 30 },
        { text: '31日', value: 31 }
    ]
    // var datas = [];
    // for (var i = 0; i < data2.length; i++) {
    //     datas.push(data2[i].text);

// }
// for (var i = 0; i < datas.length; i++) {
//     if (datas[i] == "01月") {
//         data3.pop();
//     }
// }



// console.log(data3)

// 开始时间
var picker1 = new Picker({
    data: [data1, data2, data3],
    selectedIndex: [80, 0, 0],
    title: '出生日期'
});


picker1.on('picker.change', function(index, selectedIndex) {


});

picker1.on('picker.select', function(selectedVal, selectedIndex) {
    var year = data1[selectedIndex[0]].text.replace(/[^0-9]/ig, "");
    var yue = data2[selectedIndex[1]].text.replace(/[^0-9]/ig, "")
    var ri = data3[selectedIndex[2]].text.replace(/[^0-9]/ig, "")
    console.log(year, yue, ri)
        // $("#dt_t_start").text(hour + ":" + minute);
    $("#USER_AGE").val(year + "-" + yue + "-" + ri)
});
nameEl2.addEventListener('click', function() {
    picker1.show();
});