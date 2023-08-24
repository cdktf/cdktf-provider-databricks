// https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/recipient
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RecipientConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/recipient#authentication_type Recipient#authentication_type}
  */
  readonly authenticationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/recipient#comment Recipient#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/recipient#data_recipient_global_metastore_id Recipient#data_recipient_global_metastore_id}
  */
  readonly dataRecipientGlobalMetastoreId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/recipient#id Recipient#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/recipient#name Recipient#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/recipient#sharing_code Recipient#sharing_code}
  */
  readonly sharingCode?: string;
  /**
  * ip_access_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/recipient#ip_access_list Recipient#ip_access_list}
  */
  readonly ipAccessList?: RecipientIpAccessListStruct;
  /**
  * tokens block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/recipient#tokens Recipient#tokens}
  */
  readonly tokens?: RecipientTokens[] | cdktf.IResolvable;
}
export interface RecipientIpAccessListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/recipient#allowed_ip_addresses Recipient#allowed_ip_addresses}
  */
  readonly allowedIpAddresses: string[];
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

  // allowed_ip_addresses - computed: false, optional: false, required: true
  private _allowedIpAddresses?: string[]; 
  public get allowedIpAddresses() {
    return this.getListAttribute('allowed_ip_addresses');
  }
  public set allowedIpAddresses(value: string[]) {
    this._allowedIpAddresses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedIpAddressesInput() {
    return this._allowedIpAddresses;
  }
}
export interface RecipientTokens {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/recipient#activation_url Recipient#activation_url}
  */
  readonly activationUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/recipient#created_at Recipient#created_at}
  */
  readonly createdAt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/recipient#created_by Recipient#created_by}
  */
  readonly createdBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/recipient#expiration_time Recipient#expiration_time}
  */
  readonly expirationTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/recipient#id Recipient#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/recipient#updated_at Recipient#updated_at}
  */
  readonly updatedAt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/recipient#updated_by Recipient#updated_by}
  */
  readonly updatedBy?: string;
}

export function recipientTokensToTerraform(struct?: RecipientTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activation_url: cdktf.stringToTerraform(struct!.activationUrl),
    created_at: cdktf.numberToTerraform(struct!.createdAt),
    created_by: cdktf.stringToTerraform(struct!.createdBy),
    expiration_time: cdktf.numberToTerraform(struct!.expirationTime),
    id: cdktf.stringToTerraform(struct!.id),
    updated_at: cdktf.numberToTerraform(struct!.updatedAt),
    updated_by: cdktf.stringToTerraform(struct!.updatedBy),
  }
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
    if (this._activationUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.activationUrl = this._activationUrl;
    }
    if (this._createdAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdAt = this._createdAt;
    }
    if (this._createdBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdBy = this._createdBy;
    }
    if (this._expirationTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationTime = this._expirationTime;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._updatedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatedAt = this._updatedAt;
    }
    if (this._updatedBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatedBy = this._updatedBy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecipientTokens | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activationUrl = undefined;
      this._createdAt = undefined;
      this._createdBy = undefined;
      this._expirationTime = undefined;
      this._id = undefined;
      this._updatedAt = undefined;
      this._updatedBy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activationUrl = value.activationUrl;
      this._createdAt = value.createdAt;
      this._createdBy = value.createdBy;
      this._expirationTime = value.expirationTime;
      this._id = value.id;
      this._updatedAt = value.updatedAt;
      this._updatedBy = value.updatedBy;
    }
  }

  // activation_url - computed: true, optional: true, required: false
  private _activationUrl?: string; 
  public get activationUrl() {
    return this.getStringAttribute('activation_url');
  }
  public set activationUrl(value: string) {
    this._activationUrl = value;
  }
  public resetActivationUrl() {
    this._activationUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activationUrlInput() {
    return this._activationUrl;
  }

  // created_at - computed: true, optional: true, required: false
  private _createdAt?: number; 
  public get createdAt() {
    return this.getNumberAttribute('created_at');
  }
  public set createdAt(value: number) {
    this._createdAt = value;
  }
  public resetCreatedAt() {
    this._createdAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
  }

  // created_by - computed: true, optional: true, required: false
  private _createdBy?: string; 
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }
  public set createdBy(value: string) {
    this._createdBy = value;
  }
  public resetCreatedBy() {
    this._createdBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByInput() {
    return this._createdBy;
  }

  // expiration_time - computed: true, optional: true, required: false
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

  // updated_at - computed: true, optional: true, required: false
  private _updatedAt?: number; 
  public get updatedAt() {
    return this.getNumberAttribute('updated_at');
  }
  public set updatedAt(value: number) {
    this._updatedAt = value;
  }
  public resetUpdatedAt() {
    this._updatedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAtInput() {
    return this._updatedAt;
  }

  // updated_by - computed: true, optional: true, required: false
  private _updatedBy?: string; 
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }
  public set updatedBy(value: string) {
    this._updatedBy = value;
  }
  public resetUpdatedBy() {
    this._updatedBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedByInput() {
    return this._updatedBy;
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
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/recipient databricks_recipient}
*/
export class Recipient extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_recipient";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/recipient databricks_recipient} Resource
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
        providerVersion: '1.23.0',
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
    this._id = config.id;
    this._name = config.name;
    this._sharingCode = config.sharingCode;
    this._ipAccessList.internalValue = config.ipAccessList;
    this._tokens.internalValue = config.tokens;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      sharing_code: cdktf.stringToTerraform(this._sharingCode),
      ip_access_list: recipientIpAccessListStructToTerraform(this._ipAccessList.internalValue),
      tokens: cdktf.listMapper(recipientTokensToTerraform, true)(this._tokens.internalValue),
    };
  }
}
