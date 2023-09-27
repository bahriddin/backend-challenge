class IssuesController < ApplicationController
  def create
    Issue.create!(title: params[:title], description: params[:description])
  end

  def show
    @issue = Issue.find(params[:id])

    if @issue.present?
      render json: @issue
    else
      render json: { error: 'Issue not found' }.to_json, status: 404
    end
  end

  def update
    @issue = Issue.find(params[:id])

    if @issue.present?
      @issue.update!(title: params[:title], description: params[:description])
      render json: @issue
    else
      render json: { error: 'Issue not found' }.to_json, status: 404
    end
  end

  def delete
    @issue = Issue.find(params[:id])

    if @issue.present?
      render json: { id: @issue }
    else
      render json: { error: 'Issue not found' }.to_json, status: 404
    end
  end
end