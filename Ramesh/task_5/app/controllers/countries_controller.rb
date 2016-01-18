class CountriesController < ApplicationController
  def index
  	@country = Country.all
  end

  def show
  	@country = Country.find(params[:id])
    @country.clickcount = @country.clickcount+1
    @country.save
    render :layout => false
  end

  def new
  	@country = Country.new 
    render :layout => false 	
  end

  def edit
  end
  def create
  	@country = Country.new(params[:country])
  	@country.save
  	redirect_to(@country)  	
  end  
end
