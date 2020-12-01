<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>章鱼教育</title>
</head>
<body>
<%-- out.println("演示用request处理POST表单数据"); --%>
<% request.setCharacterEncoding("utf-8"); %>
<% 
	String name = request.getParameter("username");
	String password = request.getParameter("password");
	if("admin".equals(name) && "123456".equals(password) ){
		//response.sendRedirect("welcom.jsp");
		
		Cookie cookie = new Cookie("username",name);
		cookie.setMaxAge(300);
		response.addCookie(cookie);	
		
		RequestDispatcher rd = request.getRequestDispatcher("welcom.jsp");
		rd.forward(request, response);
	}else{
		out.println("账号或密码错误!");
	}
%>
</body>
</html>