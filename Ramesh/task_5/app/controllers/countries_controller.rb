class CountriesController < ApplicationController
  
  before_filter :check_user, :only =>[:new, :create]

  def index  	
  end

  def show
  	@country = Country.find(params[:id])    
    render :layout => !request.xhr?
  end

  def new
  	@country = Country.new
  end

  def create
    if (params[:country][:type] == "Withcontinent")
      @country = Withcontinent.new(params[:country]) 
    else
      params[:country][:continent] = nil
      @country = Withoutcontinent.new(params[:country]) 
    end   	
  	if @country.save
  	 redirect_to(countries_path)
    else
      flash[:notice] = "Country not successfully added"
      render 'new' 
    end
  end

  def check_user
    if (!current_user)
      flash[:notice] = "You Must Login Then Only You Can Add a Country"
      redirect_to '/login'
    end
  end
end
