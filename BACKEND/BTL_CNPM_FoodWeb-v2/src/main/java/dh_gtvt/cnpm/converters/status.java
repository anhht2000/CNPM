package dh_gtvt.cnpm.converters;

public enum status {
    Active("Active"), NotActive("NotActive"), Block("Block");
    private String code;

    status(String code){
        this.code = code;
    }
    public String getCode() {
        return code;
    }
}
