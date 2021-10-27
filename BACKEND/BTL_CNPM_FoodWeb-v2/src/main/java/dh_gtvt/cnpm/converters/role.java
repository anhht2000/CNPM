package dh_gtvt.cnpm.converters;

public enum role {

	Admin("Admin"), User("User");
	
	private String code;

	private role(String code) {
		this.code = code;
	}

	public String getCode() {
		return code;
	}
	
}
