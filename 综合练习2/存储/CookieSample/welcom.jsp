<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>章鱼教育</title>
</head>
<body>
	<%
		String username = null;
		Cookie[] cookies = request.getCookies();
		if (cookies != null) {
			for (Cookie cookie : cookies) {
				if ("username".equals(cookie.getName())) {
					username = cookie.getValue();
					break;
				}
			}
		}
		if (username == null || username.isEmpty()) {
			response.sendRedirect("index.jsp");
		} else {
	%>
	<p>
		你好！<%
		out.println(username);
	%>
		欢迎登录本系统！
	</p>
	<div>
		<button onclick="logout()">登出系统</button>
	</div>
	<script>
		function logout(){
			var exp = new Date();
			exp.setTime (exp.getTime() - 1);
			document.cookie="username=;  expires=" + exp.toGMTString();
			window.location.reload();
		}
	</script>
	<%
		}
	%>
</body>
</html>