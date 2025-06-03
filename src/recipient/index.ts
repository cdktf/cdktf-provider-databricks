// https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/recipient
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RecipientConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/recipient#authentication_type Recipient#authentication_type}
  */
  readonly authenticationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/recipient#comment Recipient#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/recipient#data_recipient_global_metastore_id Recipient#data_recipient_global_metastore_id}
  */
  readonly dataRecipientGlobalMetastoreId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/recipient#expiration_time Recipient#expiration_time}
  */
  readonly expirationTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/recipient#id Recipient#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/recipient#name Recipient#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/recipient#owner Recipient#owner}
  */
  readonly owner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/recipient#sharing_code Recipient#sharing_code}
  */
  readonly sharingCode?: string;
  /**
  * ip_access_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/recipient#ip_access_list Recipient#ip_access_list}
  */
  readonly ipAccessList?: RecipientIpAccessListStruct;
  /**
  * properties_kvpairs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/recipient#properties_kvpairs Recipient#properties_kvpairs}
  */
  readonly propertiesKvpairs?: RecipientPropertiesKvpairs;
  /**
  * tokens block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/recipient#tokens Recipient#tokens}
  */
  readonly tokens?: RecipientTokens[] | cdktf.IResolvable;
}
export interface RecipientIpAccessListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/recipient#allowed_ip_addresses Recipient#allowed_ip_addresses}
  */
  readonly allowedIpAddresses?: string[];
}

export function recipientIpAccessListStructToTerraform(struct?: RecipientIpAccessListStructOutputReference | RecipientIpAccessListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedIpAddresses),
  }
}


export function recipientIpAccessListStructToHclTerraform(struct?: RecipientIpAccessListStructOutputReference | RecipientIpAccessListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_ip_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedIpAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecipientIpAccessListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecipientIpAccessListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedIpAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedIpAddresses = this._allowedIpAddresses;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecipientIpAccessListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedIpAddresses = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedIpAddresses = value.allowedIpAddresses;
    }
  }

  // allowed_ip_addresses - computed: false, optional: true, required: false
  private _allowedIpAddresses?: string[]; 
  public get allowedIpAddresses() {
    return this.getListAttribute('allowed_ip_addresses');
  }
  public set allowedIpAddresses(value: string[]) {
    this._allowedIpAddresses = value;
  }
  public resetAllowedIpAddresses() {
    this._allowedIpAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedIpAddressesInput() {
    return this._allowedIpAddresses;
  }
}
export interface RecipientPropertiesKvpairs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/recipient#properties Recipient#properties}
  */
  readonly properties: { [key: string]: string };
}

export function recipientPropertiesKvpairsToTerraform(struct?: RecipientPropertiesKvpairsOutputReference | RecipientPropertiesKvpairs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
  }
}


export function recipientPropertiesKvpairsToHclTerraform(struct?: RecipientPropertiesKvpairsOutputReference | RecipientPropertiesKvpairs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.properties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecipientPropertiesKvpairsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RecipientPropertiesKvpairs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecipientPropertiesKvpairs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._properties = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._properties = value.properties;
    }
  }

  // properties - computed: false, optional: false, required: true
  private _properties?: { [key: string]: string }; 
  public get properties() {
    return this.getStringMapAttribute('properties');
  }
  public set properties(value: { [key: string]: string }) {
    this._properties = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }
}
export interface RecipientTokens {
}

export function recipientTokensToTerraform(struct?: RecipientTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function recipientTokensToHclTerraform(struct?: RecipientTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class RecipientTokensOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): RecipientTokens | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecipientTokens | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // activation_url - computed: true, optional: false, required: false
  public get activationUrl() {
    return this.getStringAttribute('activation_url');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getNumberAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // expiration_time - computed: true, optional: false, required: false
  public get expirationTime() {
    return this.getNumberAttribute('expiration_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getNumberAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }
}

export class RecipientTokensList extends cdktf.ComplexList {
  public internalValue? : RecipientTokens[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): RecipientTokensOutputReference {
    return new RecipientTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/recipient databricks_recipient}
*/
export class Recipient extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_recipient";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Recipient resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Recipient to import
  * @param importFromId The id of the existing Recipient that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/recipient#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Recipient to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_recipient", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.81.1/docs/resources/recipient databricks_recipient} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RecipientConfig
  */
  public constructor(scope: Construct, id: string, config: RecipientConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_recipient',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.81.1',
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
    this._authenticationType = config.authenticationType;
    this._comment = config.comment;
    this._dataRecipientGlobalMetastoreId = config.dataRecipientGlobalMetastoreId;
    this._expirationTime = config.expirationTime;
    this._id = config.id;
    this._name = config.name;
    this._owner = config.owner;
    this._sharingCode = config.sharingCode;
    this._ipAccessList.internalValue = config.ipAccessList;
    this._propertiesKvpairs.internalValue = config.propertiesKvpairs;
    this._tokens.internalValue = config.tokens;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activated - computed: true, optional: false, required: false
  public get activated() {
    return this.getBooleanAttribute('activated');
  }

  // activation_url - computed: true, optional: false, required: false
  public get activationUrl() {
    return this.getStringAttribute('activation_url');
  }

  // authentication_type - computed: false, optional: false, required: true
  private _authenticationType?: string; 
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }
  public set authenticationType(value: string) {
    this._authenticationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeInput() {
    return this._authenticationType;
  }

  // cloud - computed: true, optional: false, required: false
  public get cloud() {
    return this.getStringAttribute('cloud');
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getNumberAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // data_recipient_global_metastore_id - computed: false, optional: true, required: false
  private _dataRecipientGlobalMetastoreId?: string; 
  public get dataRecipientGlobalMetastoreId() {
    return this.getStringAttribute('data_recipient_global_metastore_id');
  }
  public set dataRecipientGlobalMetastoreId(value: string) {
    this._dataRecipientGlobalMetastoreId = value;
  }
  public resetDataRecipientGlobalMetastoreId() {
    this._dataRecipientGlobalMetastoreId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataRecipientGlobalMetastoreIdInput() {
    return this._dataRecipientGlobalMetastoreId;
  }

  // expiration_time - computed: false, optional: true, required: false
  private _expirationTime?: number; 
  public get expirationTime() {
    return this.getNumberAttribute('expiration_time');
  }
  public set expirationTime(value: number) {
    this._expirationTime = value;
  }
  public resetExpirationTime() {
    this._expirationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationTimeInput() {
    return this._expirationTime;
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

  // metastore_id - computed: true, optional: false, required: false
  public get metastoreId() {
    return this.getStringAttribute('metastore_id');
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

  // owner - computed: false, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // sharing_code - computed: false, optional: true, required: false
  private _sharingCode?: string; 
  public get sharingCode() {
    return this.getStringAttribute('sharing_code');
  }
  public set sharingCode(value: string) {
    this._sharingCode = value;
  }
  public resetSharingCode() {
    this._sharingCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharingCodeInput() {
    return this._sharingCode;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getNumberAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // ip_access_list - computed: false, optional: true, required: false
  private _ipAccessList = new RecipientIpAccessListStructOutputReference(this, "ip_access_list");
  public get ipAccessList() {
    return this._ipAccessList;
  }
  public putIpAccessList(value: RecipientIpAccessListStruct) {
    this._ipAccessList.internalValue = value;
  }
  public resetIpAccessList() {
    this._ipAccessList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAccessListInput() {
    return this._ipAccessList.internalValue;
  }

  // properties_kvpairs - computed: false, optional: true, required: false
  private _propertiesKvpairs = new RecipientPropertiesKvpairsOutputReference(this, "properties_kvpairs");
  public get propertiesKvpairs() {
    return this._propertiesKvpairs;
  }
  public putPropertiesKvpairs(value: RecipientPropertiesKvpairs) {
    this._propertiesKvpairs.internalValue = value;
  }
  public resetPropertiesKvpairs() {
    this._propertiesKvpairs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesKvpairsInput() {
    return this._propertiesKvpairs.internalValue;
  }

  // tokens - computed: false, optional: true, required: false
  private _tokens = new RecipientTokensList(this, "tokens", false);
  public get tokens() {
    return this._tokens;
  }
  public putTokens(value: RecipientTokens[] | cdktf.IResolvable) {
    this._tokens.internalValue = value;
  }
  public resetTokens() {
    this._tokens.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokensInput() {
    return this._tokens.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication_type: cdktf.stringToTerraform(this._authenticationType),
      comment: cdktf.stringToTerraform(this._comment),
      data_recipient_global_metastore_id: cdktf.stringToTerraform(this._dataRecipientGlobalMetastoreId),
      expiration_time: cdktf.numberToTerraform(this._expirationTime),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      owner: cdktf.stringToTerraform(this._owner),
      sharing_code: cdktf.stringToTerraform(this._sharingCode),
      ip_access_list: recipientIpAccessListStructToTerraform(this._ipAccessList.internalValue),
      properties_kvpairs: recipientPropertiesKvpairsToTerraform(this._propertiesKvpairs.internalValue),
      tokens: cdktf.listMapper(recipientTokensToTerraform, true)(this._tokens.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication_type: {
        value: cdktf.stringToHclTerraform(this._authenticationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_recipient_global_metastore_id: {
        value: cdktf.stringToHclTerraform(this._dataRecipientGlobalMetastoreId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expiration_time: {
        value: cdktf.numberToHclTerraform(this._expirationTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      owner: {
        value: cdktf.stringToHclTerraform(this._owner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sharing_code: {
        value: cdktf.stringToHclTerraform(this._sharingCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_access_list: {
        value: recipientIpAccessListStructToHclTerraform(this._ipAccessList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RecipientIpAccessListStructList",
      },
      properties_kvpairs: {
        value: recipientPropertiesKvpairsToHclTerraform(this._propertiesKvpairs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RecipientPropertiesKvpairsList",
      },
      tokens: {
        value: cdktf.listMapperHcl(recipientTokensToHclTerraform, true)(this._tokens.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RecipientTokensList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
