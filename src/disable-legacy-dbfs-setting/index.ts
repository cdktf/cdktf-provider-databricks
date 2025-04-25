/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/disable_legacy_dbfs_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DisableLegacyDbfsSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/disable_legacy_dbfs_setting#etag DisableLegacyDbfsSetting#etag}
  */
  readonly etag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/disable_legacy_dbfs_setting#id DisableLegacyDbfsSetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/disable_legacy_dbfs_setting#setting_name DisableLegacyDbfsSetting#setting_name}
  */
  readonly settingName?: string;
  /**
  * disable_legacy_dbfs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/disable_legacy_dbfs_setting#disable_legacy_dbfs DisableLegacyDbfsSetting#disable_legacy_dbfs}
  */
  readonly disableLegacyDbfs: DisableLegacyDbfsSettingDisableLegacyDbfs;
}
export interface DisableLegacyDbfsSettingDisableLegacyDbfs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/disable_legacy_dbfs_setting#value DisableLegacyDbfsSetting#value}
  */
  readonly value: boolean | cdktf.IResolvable;
}

export function disableLegacyDbfsSettingDisableLegacyDbfsToTerraform(struct?: DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference | DisableLegacyDbfsSettingDisableLegacyDbfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function disableLegacyDbfsSettingDisableLegacyDbfsToHclTerraform(struct?: DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference | DisableLegacyDbfsSettingDisableLegacyDbfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DisableLegacyDbfsSettingDisableLegacyDbfs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DisableLegacyDbfsSettingDisableLegacyDbfs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: boolean | cdktf.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktf.IResolvable) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/disable_legacy_dbfs_setting databricks_disable_legacy_dbfs_setting}
*/
export class DisableLegacyDbfsSetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_disable_legacy_dbfs_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DisableLegacyDbfsSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DisableLegacyDbfsSetting to import
  * @param importFromId The id of the existing DisableLegacyDbfsSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/disable_legacy_dbfs_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DisableLegacyDbfsSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_disable_legacy_dbfs_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/resources/disable_legacy_dbfs_setting databricks_disable_legacy_dbfs_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DisableLegacyDbfsSettingConfig
  */
  public constructor(scope: Construct, id: string, config: DisableLegacyDbfsSettingConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_disable_legacy_dbfs_setting',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.75.0',
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
    this._etag = config.etag;
    this._id = config.id;
    this._settingName = config.settingName;
    this._disableLegacyDbfs.internalValue = config.disableLegacyDbfs;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // etag - computed: true, optional: true, required: false
  private _etag?: string; 
  public get etag() {
    return this.getStringAttribute('etag');
  }
  public set etag(value: string) {
    this._etag = value;
  }
  public resetEtag() {
    this._etag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etagInput() {
    return this._etag;
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

  // setting_name - computed: true, optional: true, required: false
  private _settingName?: string; 
  public get settingName() {
    return this.getStringAttribute('setting_name');
  }
  public set settingName(value: string) {
    this._settingName = value;
  }
  public resetSettingName() {
    this._settingName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingNameInput() {
    return this._settingName;
  }

  // disable_legacy_dbfs - computed: false, optional: false, required: true
  private _disableLegacyDbfs = new DisableLegacyDbfsSettingDisableLegacyDbfsOutputReference(this, "disable_legacy_dbfs");
  public get disableLegacyDbfs() {
    return this._disableLegacyDbfs;
  }
  public putDisableLegacyDbfs(value: DisableLegacyDbfsSettingDisableLegacyDbfs) {
    this._disableLegacyDbfs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get disableLegacyDbfsInput() {
    return this._disableLegacyDbfs.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      etag: cdktf.stringToTerraform(this._etag),
      id: cdktf.stringToTerraform(this._id),
      setting_name: cdktf.stringToTerraform(this._settingName),
      disable_legacy_dbfs: disableLegacyDbfsSettingDisableLegacyDbfsToTerraform(this._disableLegacyDbfs.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      etag: {
        value: cdktf.stringToHclTerraform(this._etag),
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
      setting_name: {
        value: cdktf.stringToHclTerraform(this._settingName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_legacy_dbfs: {
        value: disableLegacyDbfsSettingDisableLegacyDbfsToHclTerraform(this._disableLegacyDbfs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DisableLegacyDbfsSettingDisableLegacyDbfsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
