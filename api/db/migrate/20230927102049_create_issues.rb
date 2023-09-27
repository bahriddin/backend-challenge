class CreateIssues < ActiveRecord::Migration[7.0]
  def change
    create_table :issues do |t|
      t.string :title, null: false, index: { unique: true }
      t.text :description

      t.timestamps
    end
  end
end
