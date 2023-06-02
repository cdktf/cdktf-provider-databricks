/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.18.0/docs/resources/sql_alert
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SqlAlertConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.18.0/docs/resources/sql_alert#id SqlAlert#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.18.0/docs/resources/sql_alert#name SqlAlert#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.18.0/docs/resources/sql_alert#parent SqlAlert#parent}
  */
  readonly parent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.18.0/docs/resources/sql_alert#query_id SqlAlert#query_id}
  */
  readonly queryId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.18.0/docs/resources/sql_alert#rearm SqlAlert#rearm}
  */
  readonly rearm?: number;
  /**
  * options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.18.0/docs/resources/sql_alert#options SqlAlert#options}
  */
  readonly options: SqlAlertOptions;
}
export interface SqlAlertOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.18.0/docs/resources/sql_alert#column SqlAlert#column}
  */
  readonly column: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.18.0/docs/resources/sql_alert#custom_body SqlAlert#custom_body}
  */
  readonly customBody?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.18.0/docs/resources/sql_alert#custom_subject SqlAlert#custom_subject}
  */
  readonly customSubject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.18.0/docs/resources/sql_alert#muted SqlAlert#muted}
  */
  readonly muted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.18.0/docs/resources/sql_alert#op SqlAlert#op}
  */
  readonly op: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.18.0/docs/resources/sql_alert#value SqlAlert#value}
  */
  readonly value: string;
}

export function sqlAlertOptionsToTerraform(struct?: SqlAlertOptionsOutputReference | SqlAlertOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktf.stringToTerraform(struct!.column),
    custom_body: cdktf.stringToTerraform(struct!.customBody),
    custom_subject: cdktf.stringToTerraform(struct!.customSubject),
    muted: cdktf.booleanToTerraform(struct!.muted),
    op: cdktf.stringToTerraform(struct!.op),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class SqlAlertOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SqlAlertOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._customBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.customBody = this._customBody;
    }
    if (this._customSubject !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSubject = this._customSubject;
    }
    if (this._muted !== undefined) {
      hasAnyValues = true;
      internalValueResult.muted = this._muted;
    }
    if (this._op !== undefined) {
      hasAnyValues = true;
      internalValueResult.op = this._op;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlAlertOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._column = undefined;
      this._customBody = undefined;
      this._customSubject = undefined;
      this._muted = undefined;
      this._op = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._column = value.column;
      this._customBody = value.customBody;
      this._customSubject = value.customSubject;
      this._muted = value.muted;
      this._op = value.op;
      this._value = value.value;
    }
  }

  // column - computed: false, optional: false, required: true
  private _column?: string; 
  public get column() {
    return this.getStringAttribute('column');
  }
  public set column(value: string) {
    this._column = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // custom_body - computed: false, optional: true, required: false
  private _customBody?: string; 
  public get customBody() {
    return this.getStringAttribute('custom_body');
  }
  public set customBody(value: string) {
    this._customBody = value;
  }
  public resetCustomBody() {
    this._customBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customBodyInput() {
    return this._customBody;
  }

  // custom_subject - computed: false, optional: true, required: false
  private _customSubject?: string; 
  public get customSubject() {
    return this.getStringAttribute('custom_subject');
  }
  public set customSubject(value: string) {
    this._customSubject = value;
  }
  public resetCustomSubject() {
    this._customSubject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSubjectInput() {
    return this._customSubject;
  }

  // muted - computed: false, optional: true, required: false
  private _muted?: boolean | cdktf.IResolvable; 
  public get muted() {
    return this.getBooleanAttribute('muted');
  }
  public set muted(value: boolean | cdktf.IResolvable) {
    this._muted = value;
  }
  public resetMuted() {
    this._muted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mutedInput() {
    return this._muted;
  }

  // op - computed: false, optional: false, required: true
  private _op?: string; 
  public get op() {
    return this.getStringAttribute('op');
  }
  public set op(value: string) {
    this._op = value;
  }
  // Temporarily expose input value. Use with caution.
  public get opInput() {
    return this._op;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.18.0/docs/resources/sql_alert databricks_sql_alert}
*/
export class SqlAlert extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_sql_alert";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.18.0/docs/resources/sql_alert databricks_sql_alert} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SqlAlertConfig
  */
  public constructor(scope: Construct, id: string, config: SqlAlertConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_sql_alert',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.18.0',
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
    this._id = config.id;
    this._name = config.name;
    this._parent = config.parent;
    this._queryId = config.queryId;
    this._rearm = config.rearm;
    this._options.internalValue = config.options;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // parent - computed: false, optional: true, required: false
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  public resetParent() {
    this._parent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
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

  // rearm - computed: false, optional: true, required: false
  private _rearm?: number; 
  public get rearm() {
    return this.getNumberAttribute('rearm');
  }
  public set rearm(value: number) {
    this._rearm = value;
  }
  public resetRearm() {
    this._rearm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rearmInput() {
    return this._rearm;
  }

  // options - computed: false, optional: false, required: true
  private _options = new SqlAlertOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: SqlAlertOptions) {
    this._options.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      parent: cdktf.stringToTerraform(this._parent),
      query_id: cdktf.stringToTerraform(this._queryId),
      rearm: cdktf.numberToTerraform(this._rearm),
      options: sqlAlertOptionsToTerraform(this._options.internalValue),
    };
  }
}
