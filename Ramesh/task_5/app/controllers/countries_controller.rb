class CountriesController < ApplicationController
  def index
  	@country = Country.all
  end

  def show
  	@country = Country.find(params[:id])
    @country.clickcount = @country.clickcount+1
    @country.save
    render :layout => !request.xhr?
  end

  def new
  	@country = Country.new      	
  end

  def create
  	@country = Country.new(params[:country])
  	@country.save
  	redirect_to(countries_path)  	
    
  end 

end
