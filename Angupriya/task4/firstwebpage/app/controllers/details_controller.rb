class DetailsController < ApplicationController


def index
@posts=Detail.all
 respond_to do |format|
    format.json { render :json=> @posts }
  end
end
end
