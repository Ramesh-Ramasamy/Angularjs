class CountriesController < ApplicationController
  
  

  def index 
    @countries = Country.all    
    respond_to do |format|      
      format.json  { render :json => @countries }
    end  	
  end

  def show
  	@country = Country.find(params[:id])    
    respond_to do |format|      
      format.json  { render :json => @country }
    end  
    # render :layout => false
  end

  def new
  	@country = Country.new
  end

  def create    
    if (params[:type] == "Withcontinent")
      @country = Withcontinent.new
      @country.continent = params[:continent];
    else
      params[:continent] = nil
      @country = Withoutcontinent.new 
    end 
    @country.type = params[:type];
    @country.countryname = params[:name];
    @country.countrydesc = params[:description];
    @country.clickcount = 0;  	
  	if @country.save!
  	 respond_to do |format|      
      format.json  { render :json => @country }
     end   
    end
  end

   def edit
    @country = Country.find(params[:id])
    respond_to do |format|      
      format.json  { render :json => @country }
    end
  end


  def update
    @country = Country.find(params[:id])       
    if @country.update_attributes(:clickcount => params[:clickcount])
      respond_to do |format|          
        format.json  { render :json => @country }      
      end
    end
  end
  
end
