class CountriesController < ApplicationController
  def index
  	@country = Country.all
  end

  def show
  	@country = Country.find(params[:id])
    @country.countvalue
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
  	@country.save
  	redirect_to(countries_path)
  end

end
