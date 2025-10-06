# `customAppIntegration` Submodule <a name="`customAppIntegration` Submodule" id="@cdktf/provider-databricks.customAppIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomAppIntegration <a name="CustomAppIntegration" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/custom_app_integration databricks_custom_app_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.custom_app_integration.CustomAppIntegration;

CustomAppIntegration.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .clientId(java.lang.String)
//  .clientSecret(java.lang.String)
//  .confidential(java.lang.Boolean|IResolvable)
//  .createdBy(java.lang.Number)
//  .createTime(java.lang.String)
//  .creatorUsername(java.lang.String)
//  .id(java.lang.String)
//  .integrationId(java.lang.String)
//  .name(java.lang.String)
//  .redirectUrls(java.util.List<java.lang.String>)
//  .scopes(java.util.List<java.lang.String>)
//  .tokenAccessPolicy(CustomAppIntegrationTokenAccessPolicy)
//  .userAuthorizedScopes(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.clientId">clientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/custom_app_integration#client_id CustomAppIntegration#client_id}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/custom_app_integration#client_secret CustomAppIntegration#client_secret}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.confidential">confidential</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/custom_app_integration#confidential CustomAppIntegration#confidential}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.createdBy">createdBy</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/custom_app_integration#created_by CustomAppIntegration#created_by}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.createTime">createTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/custom_app_integration#create_time CustomAppIntegration#create_time}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.creatorUsername">creatorUsername</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/custom_app_integration#creator_username CustomAppIntegration#creator_username}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/custom_app_integration#id CustomAppIntegration#id}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.integrationId">integrationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/custom_app_integration#integration_id CustomAppIntegration#integration_id}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/custom_app_integration#name CustomAppIntegration#name}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.redirectUrls">redirectUrls</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/custom_app_integration#redirect_urls CustomAppIntegration#redirect_urls}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/custom_app_integration#scopes CustomAppIntegration#scopes}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.tokenAccessPolicy">tokenAccessPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicy">CustomAppIntegrationTokenAccessPolicy</a></code> | token_access_policy block. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.userAuthorizedScopes">userAuthorizedScopes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/custom_app_integration#user_authorized_scopes CustomAppIntegration#user_authorized_scopes}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.clientId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/custom_app_integration#client_id CustomAppIntegration#client_id}.

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.clientSecret"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/custom_app_integration#client_secret CustomAppIntegration#client_secret}.

---

##### `confidential`<sup>Optional</sup> <a name="confidential" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.confidential"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/custom_app_integration#confidential CustomAppIntegration#confidential}.

---

##### `createdBy`<sup>Optional</sup> <a name="createdBy" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.createdBy"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/custom_app_integration#created_by CustomAppIntegration#created_by}.

---

##### `createTime`<sup>Optional</sup> <a name="createTime" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.createTime"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/custom_app_integration#create_time CustomAppIntegration#create_time}.

---

##### `creatorUsername`<sup>Optional</sup> <a name="creatorUsername" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.creatorUsername"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/custom_app_integration#creator_username CustomAppIntegration#creator_username}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/custom_app_integration#id CustomAppIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integrationId`<sup>Optional</sup> <a name="integrationId" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.integrationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/custom_app_integration#integration_id CustomAppIntegration#integration_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/custom_app_integration#name CustomAppIntegration#name}.

---

##### `redirectUrls`<sup>Optional</sup> <a name="redirectUrls" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.redirectUrls"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/custom_app_integration#redirect_urls CustomAppIntegration#redirect_urls}.

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.scopes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/custom_app_integration#scopes CustomAppIntegration#scopes}.

---

##### `tokenAccessPolicy`<sup>Optional</sup> <a name="tokenAccessPolicy" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.tokenAccessPolicy"></a>

- *Type:* <a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicy">CustomAppIntegrationTokenAccessPolicy</a>

token_access_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/custom_app_integration#token_access_policy CustomAppIntegration#token_access_policy}

---

##### `userAuthorizedScopes`<sup>Optional</sup> <a name="userAuthorizedScopes" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.userAuthorizedScopes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/custom_app_integration#user_authorized_scopes CustomAppIntegration#user_authorized_scopes}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.putTokenAccessPolicy">putTokenAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetConfidential">resetConfidential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetCreatedBy">resetCreatedBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetCreateTime">resetCreateTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetCreatorUsername">resetCreatorUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetIntegrationId">resetIntegrationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetRedirectUrls">resetRedirectUrls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetScopes">resetScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetTokenAccessPolicy">resetTokenAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetUserAuthorizedScopes">resetUserAuthorizedScopes</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTokenAccessPolicy` <a name="putTokenAccessPolicy" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.putTokenAccessPolicy"></a>

```java
public void putTokenAccessPolicy(CustomAppIntegrationTokenAccessPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.putTokenAccessPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicy">CustomAppIntegrationTokenAccessPolicy</a>

---

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetClientId"></a>

```java
public void resetClientId()
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetClientSecret"></a>

```java
public void resetClientSecret()
```

##### `resetConfidential` <a name="resetConfidential" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetConfidential"></a>

```java
public void resetConfidential()
```

##### `resetCreatedBy` <a name="resetCreatedBy" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetCreatedBy"></a>

```java
public void resetCreatedBy()
```

##### `resetCreateTime` <a name="resetCreateTime" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetCreateTime"></a>

```java
public void resetCreateTime()
```

##### `resetCreatorUsername` <a name="resetCreatorUsername" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetCreatorUsername"></a>

```java
public void resetCreatorUsername()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetId"></a>

```java
public void resetId()
```

##### `resetIntegrationId` <a name="resetIntegrationId" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetIntegrationId"></a>

```java
public void resetIntegrationId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetName"></a>

```java
public void resetName()
```

##### `resetRedirectUrls` <a name="resetRedirectUrls" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetRedirectUrls"></a>

```java
public void resetRedirectUrls()
```

##### `resetScopes` <a name="resetScopes" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetScopes"></a>

```java
public void resetScopes()
```

##### `resetTokenAccessPolicy` <a name="resetTokenAccessPolicy" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetTokenAccessPolicy"></a>

```java
public void resetTokenAccessPolicy()
```

##### `resetUserAuthorizedScopes` <a name="resetUserAuthorizedScopes" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetUserAuthorizedScopes"></a>

```java
public void resetUserAuthorizedScopes()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CustomAppIntegration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.custom_app_integration.CustomAppIntegration;

CustomAppIntegration.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.custom_app_integration.CustomAppIntegration;

CustomAppIntegration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.custom_app_integration.CustomAppIntegration;

CustomAppIntegration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.custom_app_integration.CustomAppIntegration;

CustomAppIntegration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CustomAppIntegration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CustomAppIntegration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CustomAppIntegration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CustomAppIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/custom_app_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CustomAppIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.tokenAccessPolicy">tokenAccessPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference">CustomAppIntegrationTokenAccessPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.confidentialInput">confidentialInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.createdByInput">createdByInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.createTimeInput">createTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.creatorUsernameInput">creatorUsernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.integrationIdInput">integrationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.redirectUrlsInput">redirectUrlsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.scopesInput">scopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.tokenAccessPolicyInput">tokenAccessPolicyInput</a></code> | <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicy">CustomAppIntegrationTokenAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.userAuthorizedScopesInput">userAuthorizedScopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.confidential">confidential</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.createdBy">createdBy</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.creatorUsername">creatorUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.integrationId">integrationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.redirectUrls">redirectUrls</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.userAuthorizedScopes">userAuthorizedScopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `tokenAccessPolicy`<sup>Required</sup> <a name="tokenAccessPolicy" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.tokenAccessPolicy"></a>

```java
public CustomAppIntegrationTokenAccessPolicyOutputReference getTokenAccessPolicy();
```

- *Type:* <a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference">CustomAppIntegrationTokenAccessPolicyOutputReference</a>

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `confidentialInput`<sup>Optional</sup> <a name="confidentialInput" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.confidentialInput"></a>

```java
public java.lang.Boolean|IResolvable getConfidentialInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `createdByInput`<sup>Optional</sup> <a name="createdByInput" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.createdByInput"></a>

```java
public java.lang.Number getCreatedByInput();
```

- *Type:* java.lang.Number

---

##### `createTimeInput`<sup>Optional</sup> <a name="createTimeInput" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.createTimeInput"></a>

```java
public java.lang.String getCreateTimeInput();
```

- *Type:* java.lang.String

---

##### `creatorUsernameInput`<sup>Optional</sup> <a name="creatorUsernameInput" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.creatorUsernameInput"></a>

```java
public java.lang.String getCreatorUsernameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `integrationIdInput`<sup>Optional</sup> <a name="integrationIdInput" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.integrationIdInput"></a>

```java
public java.lang.String getIntegrationIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `redirectUrlsInput`<sup>Optional</sup> <a name="redirectUrlsInput" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.redirectUrlsInput"></a>

```java
public java.util.List<java.lang.String> getRedirectUrlsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.scopesInput"></a>

```java
public java.util.List<java.lang.String> getScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenAccessPolicyInput`<sup>Optional</sup> <a name="tokenAccessPolicyInput" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.tokenAccessPolicyInput"></a>

```java
public CustomAppIntegrationTokenAccessPolicy getTokenAccessPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicy">CustomAppIntegrationTokenAccessPolicy</a>

---

##### `userAuthorizedScopesInput`<sup>Optional</sup> <a name="userAuthorizedScopesInput" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.userAuthorizedScopesInput"></a>

```java
public java.util.List<java.lang.String> getUserAuthorizedScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `confidential`<sup>Required</sup> <a name="confidential" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.confidential"></a>

```java
public java.lang.Boolean|IResolvable getConfidential();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.createdBy"></a>

```java
public java.lang.Number getCreatedBy();
```

- *Type:* java.lang.Number

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `creatorUsername`<sup>Required</sup> <a name="creatorUsername" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.creatorUsername"></a>

```java
public java.lang.String getCreatorUsername();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `integrationId`<sup>Required</sup> <a name="integrationId" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.integrationId"></a>

```java
public java.lang.String getIntegrationId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `redirectUrls`<sup>Required</sup> <a name="redirectUrls" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.redirectUrls"></a>

```java
public java.util.List<java.lang.String> getRedirectUrls();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `userAuthorizedScopes`<sup>Required</sup> <a name="userAuthorizedScopes" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.userAuthorizedScopes"></a>

```java
public java.util.List<java.lang.String> getUserAuthorizedScopes();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CustomAppIntegrationConfig <a name="CustomAppIntegrationConfig" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.custom_app_integration.CustomAppIntegrationConfig;

CustomAppIntegrationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .clientId(java.lang.String)
//  .clientSecret(java.lang.String)
//  .confidential(java.lang.Boolean|IResolvable)
//  .createdBy(java.lang.Number)
//  .createTime(java.lang.String)
//  .creatorUsername(java.lang.String)
//  .id(java.lang.String)
//  .integrationId(java.lang.String)
//  .name(java.lang.String)
//  .redirectUrls(java.util.List<java.lang.String>)
//  .scopes(java.util.List<java.lang.String>)
//  .tokenAccessPolicy(CustomAppIntegrationTokenAccessPolicy)
//  .userAuthorizedScopes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.clientId">clientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/custom_app_integration#client_id CustomAppIntegration#client_id}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/custom_app_integration#client_secret CustomAppIntegration#client_secret}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.confidential">confidential</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/custom_app_integration#confidential CustomAppIntegration#confidential}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.createdBy">createdBy</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/custom_app_integration#created_by CustomAppIntegration#created_by}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.createTime">createTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/custom_app_integration#create_time CustomAppIntegration#create_time}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.creatorUsername">creatorUsername</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/custom_app_integration#creator_username CustomAppIntegration#creator_username}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/custom_app_integration#id CustomAppIntegration#id}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.integrationId">integrationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/custom_app_integration#integration_id CustomAppIntegration#integration_id}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/custom_app_integration#name CustomAppIntegration#name}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.redirectUrls">redirectUrls</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/custom_app_integration#redirect_urls CustomAppIntegration#redirect_urls}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/custom_app_integration#scopes CustomAppIntegration#scopes}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.tokenAccessPolicy">tokenAccessPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicy">CustomAppIntegrationTokenAccessPolicy</a></code> | token_access_policy block. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.userAuthorizedScopes">userAuthorizedScopes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/custom_app_integration#user_authorized_scopes CustomAppIntegration#user_authorized_scopes}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/custom_app_integration#client_id CustomAppIntegration#client_id}.

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/custom_app_integration#client_secret CustomAppIntegration#client_secret}.

---

##### `confidential`<sup>Optional</sup> <a name="confidential" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.confidential"></a>

```java
public java.lang.Boolean|IResolvable getConfidential();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/custom_app_integration#confidential CustomAppIntegration#confidential}.

---

##### `createdBy`<sup>Optional</sup> <a name="createdBy" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.createdBy"></a>

```java
public java.lang.Number getCreatedBy();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/custom_app_integration#created_by CustomAppIntegration#created_by}.

---

##### `createTime`<sup>Optional</sup> <a name="createTime" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/custom_app_integration#create_time CustomAppIntegration#create_time}.

---

##### `creatorUsername`<sup>Optional</sup> <a name="creatorUsername" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.creatorUsername"></a>

```java
public java.lang.String getCreatorUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/custom_app_integration#creator_username CustomAppIntegration#creator_username}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/custom_app_integration#id CustomAppIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integrationId`<sup>Optional</sup> <a name="integrationId" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.integrationId"></a>

```java
public java.lang.String getIntegrationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/custom_app_integration#integration_id CustomAppIntegration#integration_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/custom_app_integration#name CustomAppIntegration#name}.

---

##### `redirectUrls`<sup>Optional</sup> <a name="redirectUrls" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.redirectUrls"></a>

```java
public java.util.List<java.lang.String> getRedirectUrls();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/custom_app_integration#redirect_urls CustomAppIntegration#redirect_urls}.

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/custom_app_integration#scopes CustomAppIntegration#scopes}.

---

##### `tokenAccessPolicy`<sup>Optional</sup> <a name="tokenAccessPolicy" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.tokenAccessPolicy"></a>

```java
public CustomAppIntegrationTokenAccessPolicy getTokenAccessPolicy();
```

- *Type:* <a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicy">CustomAppIntegrationTokenAccessPolicy</a>

token_access_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/custom_app_integration#token_access_policy CustomAppIntegration#token_access_policy}

---

##### `userAuthorizedScopes`<sup>Optional</sup> <a name="userAuthorizedScopes" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.userAuthorizedScopes"></a>

```java
public java.util.List<java.lang.String> getUserAuthorizedScopes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/custom_app_integration#user_authorized_scopes CustomAppIntegration#user_authorized_scopes}.

---

### CustomAppIntegrationTokenAccessPolicy <a name="CustomAppIntegrationTokenAccessPolicy" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.custom_app_integration.CustomAppIntegrationTokenAccessPolicy;

CustomAppIntegrationTokenAccessPolicy.builder()
//  .accessTokenTtlInMinutes(java.lang.Number)
//  .refreshTokenTtlInMinutes(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicy.property.accessTokenTtlInMinutes">accessTokenTtlInMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/custom_app_integration#access_token_ttl_in_minutes CustomAppIntegration#access_token_ttl_in_minutes}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicy.property.refreshTokenTtlInMinutes">refreshTokenTtlInMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/custom_app_integration#refresh_token_ttl_in_minutes CustomAppIntegration#refresh_token_ttl_in_minutes}. |

---

##### `accessTokenTtlInMinutes`<sup>Optional</sup> <a name="accessTokenTtlInMinutes" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicy.property.accessTokenTtlInMinutes"></a>

```java
public java.lang.Number getAccessTokenTtlInMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/custom_app_integration#access_token_ttl_in_minutes CustomAppIntegration#access_token_ttl_in_minutes}.

---

##### `refreshTokenTtlInMinutes`<sup>Optional</sup> <a name="refreshTokenTtlInMinutes" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicy.property.refreshTokenTtlInMinutes"></a>

```java
public java.lang.Number getRefreshTokenTtlInMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/custom_app_integration#refresh_token_ttl_in_minutes CustomAppIntegration#refresh_token_ttl_in_minutes}.

---

## Classes <a name="Classes" id="Classes"></a>

### CustomAppIntegrationTokenAccessPolicyOutputReference <a name="CustomAppIntegrationTokenAccessPolicyOutputReference" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.custom_app_integration.CustomAppIntegrationTokenAccessPolicyOutputReference;

new CustomAppIntegrationTokenAccessPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.resetAccessTokenTtlInMinutes">resetAccessTokenTtlInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.resetRefreshTokenTtlInMinutes">resetRefreshTokenTtlInMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessTokenTtlInMinutes` <a name="resetAccessTokenTtlInMinutes" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.resetAccessTokenTtlInMinutes"></a>

```java
public void resetAccessTokenTtlInMinutes()
```

##### `resetRefreshTokenTtlInMinutes` <a name="resetRefreshTokenTtlInMinutes" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.resetRefreshTokenTtlInMinutes"></a>

```java
public void resetRefreshTokenTtlInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.accessTokenTtlInMinutesInput">accessTokenTtlInMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.refreshTokenTtlInMinutesInput">refreshTokenTtlInMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.accessTokenTtlInMinutes">accessTokenTtlInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.refreshTokenTtlInMinutes">refreshTokenTtlInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicy">CustomAppIntegrationTokenAccessPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessTokenTtlInMinutesInput`<sup>Optional</sup> <a name="accessTokenTtlInMinutesInput" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.accessTokenTtlInMinutesInput"></a>

```java
public java.lang.Number getAccessTokenTtlInMinutesInput();
```

- *Type:* java.lang.Number

---

##### `refreshTokenTtlInMinutesInput`<sup>Optional</sup> <a name="refreshTokenTtlInMinutesInput" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.refreshTokenTtlInMinutesInput"></a>

```java
public java.lang.Number getRefreshTokenTtlInMinutesInput();
```

- *Type:* java.lang.Number

---

##### `accessTokenTtlInMinutes`<sup>Required</sup> <a name="accessTokenTtlInMinutes" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.accessTokenTtlInMinutes"></a>

```java
public java.lang.Number getAccessTokenTtlInMinutes();
```

- *Type:* java.lang.Number

---

##### `refreshTokenTtlInMinutes`<sup>Required</sup> <a name="refreshTokenTtlInMinutes" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.refreshTokenTtlInMinutes"></a>

```java
public java.lang.Number getRefreshTokenTtlInMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.internalValue"></a>

```java
public CustomAppIntegrationTokenAccessPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicy">CustomAppIntegrationTokenAccessPolicy</a>

---



