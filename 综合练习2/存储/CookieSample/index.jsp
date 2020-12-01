<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<%
		String username = null;
		Cookie[] cookies = request.getCookies();
		if(cookies == null) {
			for (Cookie cookie : cookies) {
				if ("username".equals(cookie.getName())) {
					username = cookie.getValue();
					break;
				}
			}
		}
		if (username != null && !username.isEmpty()) {
			response.sendRedirect("welcom.jsp");
		} else {
	%>
	<form method="post" action="login.jsp">
		用户名: <input type="text" name="username"> 密码: <input
			type="password" name="password" /> <input type="submit" value="提交" />
	</form>
	<%
		}
	%>
</body>
</html>