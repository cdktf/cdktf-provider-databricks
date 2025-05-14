/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/sql_visualization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SqlVisualizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/sql_visualization#description SqlVisualization#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/sql_visualization#id SqlVisualization#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/sql_visualization#name SqlVisualization#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/sql_visualization#options SqlVisualization#options}
  */
  readonly options: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/sql_visualization#query_id SqlVisualization#query_id}
  */
  readonly queryId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/sql_visualization#query_plan SqlVisualization#query_plan}
  */
  readonly queryPlan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/sql_visualization#type SqlVisualization#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/sql_visualization#visualization_id SqlVisualization#visualization_id}
  */
  readonly visualizationId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/sql_visualization databricks_sql_visualization}
*/
export class SqlVisualization extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_sql_visualization";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SqlVisualization resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SqlVisualization to import
  * @param importFromId The id of the existing SqlVisualization that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/sql_visualization#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SqlVisualization to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_sql_visualization", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.79.0/docs/resources/sql_visualization databricks_sql_visualization} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SqlVisualizationConfig
  */
  public constructor(scope: Construct, id: string, config: SqlVisualizationConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_sql_visualization',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.79.0',
        providerVersionConstraint: '~> 1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._options = config.options;
    this._queryId = config.queryId;
    this._queryPlan = config.queryPlan;
    this._type = config.type;
    this._visualizationId = config.visualizationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // options - computed: false, optional: false, required: true
  private _options?: string; 
  public get options() {
    return this.getStringAttribute('options');
  }
  public set options(value: string) {
    this._options = value;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // query_id - computed: false, optional: false, required: true
  private _queryId?: string; 
  public get queryId() {
    return this.getStringAttribute('query_id');
  }
  public set queryId(value: string) {
    this._queryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryIdInput() {
    return this._queryId;
  }

  // query_plan - computed: false, optional: true, required: false
  private _queryPlan?: string; 
  public get queryPlan() {
    return this.getStringAttribute('query_plan');
  }
  public set queryPlan(value: string) {
    this._queryPlan = value;
  }
  public resetQueryPlan() {
    this._queryPlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryPlanInput() {
    return this._queryPlan;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // visualization_id - computed: true, optional: true, required: false
  private _visualizationId?: string; 
  public get visualizationId() {
    return this.getStringAttribute('visualization_id');
  }
  public set visualizationId(value: string) {
    this._visualizationId = value;
  }
  public resetVisualizationId() {
    this._visualizationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualizationIdInput() {
    return this._visualizationId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      options: cdktf.stringToTerraform(this._options),
      query_id: cdktf.stringToTerraform(this._queryId),
      query_plan: cdktf.stringToTerraform(this._queryPlan),
      type: cdktf.stringToTerraform(this._type),
      visualization_id: cdktf.stringToTerraform(this._visualizationId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      options: {
        value: cdktf.stringToHclTerraform(this._options),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_id: {
        value: cdktf.stringToHclTerraform(this._queryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_plan: {
        value: cdktf.stringToHclTerraform(this._queryPlan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      visualization_id: {
        value: cdktf.stringToHclTerraform(this._visualizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
