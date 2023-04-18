# `databricks_mws_private_access_settings`

Refer to the Terraform Registory for docs: [`databricks_mws_private_access_settings`](https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/mws_private_access_settings).

# `mwsPrivateAccessSettings` Submodule <a name="`mwsPrivateAccessSettings` Submodule" id="@cdktf/provider-databricks.mwsPrivateAccessSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MwsPrivateAccessSettings <a name="MwsPrivateAccessSettings" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/mws_private_access_settings databricks_mws_private_access_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mws_private_access_settings.MwsPrivateAccessSettings;

MwsPrivateAccessSettings.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .privateAccessSettingsName(java.lang.String)
    .region(java.lang.String)
//  .accountId(java.lang.String)
//  .allowedVpcEndpointIds(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .privateAccessLevel(java.lang.String)
//  .privateAccessSettingsId(java.lang.String)
//  .publicAccessEnabled(java.lang.Boolean)
//  .publicAccessEnabled(IResolvable)
//  .status(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.privateAccessSettingsName">privateAccessSettingsName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/mws_private_access_settings#private_access_settings_name MwsPrivateAccessSettings#private_access_settings_name}. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/mws_private_access_settings#region MwsPrivateAccessSettings#region}. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/mws_private_access_settings#account_id MwsPrivateAccessSettings#account_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.allowedVpcEndpointIds">allowedVpcEndpointIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/mws_private_access_settings#allowed_vpc_endpoint_ids MwsPrivateAccessSettings#allowed_vpc_endpoint_ids}. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/mws_private_access_settings#id MwsPrivateAccessSettings#id}. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.privateAccessLevel">privateAccessLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/mws_private_access_settings#private_access_level MwsPrivateAccessSettings#private_access_level}. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.privateAccessSettingsId">privateAccessSettingsId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/mws_private_access_settings#private_access_settings_id MwsPrivateAccessSettings#private_access_settings_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.publicAccessEnabled">publicAccessEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/mws_private_access_settings#public_access_enabled MwsPrivateAccessSettings#public_access_enabled}. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/mws_private_access_settings#status MwsPrivateAccessSettings#status}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `privateAccessSettingsName`<sup>Required</sup> <a name="privateAccessSettingsName" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.privateAccessSettingsName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/mws_private_access_settings#private_access_settings_name MwsPrivateAccessSettings#private_access_settings_name}.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/mws_private_access_settings#region MwsPrivateAccessSettings#region}.

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/mws_private_access_settings#account_id MwsPrivateAccessSettings#account_id}.

---

##### `allowedVpcEndpointIds`<sup>Optional</sup> <a name="allowedVpcEndpointIds" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.allowedVpcEndpointIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/mws_private_access_settings#allowed_vpc_endpoint_ids MwsPrivateAccessSettings#allowed_vpc_endpoint_ids}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/mws_private_access_settings#id MwsPrivateAccessSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `privateAccessLevel`<sup>Optional</sup> <a name="privateAccessLevel" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.privateAccessLevel"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/mws_private_access_settings#private_access_level MwsPrivateAccessSettings#private_access_level}.

---

##### `privateAccessSettingsId`<sup>Optional</sup> <a name="privateAccessSettingsId" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.privateAccessSettingsId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/mws_private_access_settings#private_access_settings_id MwsPrivateAccessSettings#private_access_settings_id}.

---

##### `publicAccessEnabled`<sup>Optional</sup> <a name="publicAccessEnabled" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.publicAccessEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/mws_private_access_settings#public_access_enabled MwsPrivateAccessSettings#public_access_enabled}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/mws_private_access_settings#status MwsPrivateAccessSettings#status}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetAllowedVpcEndpointIds">resetAllowedVpcEndpointIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetPrivateAccessLevel">resetPrivateAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetPrivateAccessSettingsId">resetPrivateAccessSettingsId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetPublicAccessEnabled">resetPublicAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetAllowedVpcEndpointIds` <a name="resetAllowedVpcEndpointIds" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetAllowedVpcEndpointIds"></a>

```java
public void resetAllowedVpcEndpointIds()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetId"></a>

```java
public void resetId()
```

##### `resetPrivateAccessLevel` <a name="resetPrivateAccessLevel" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetPrivateAccessLevel"></a>

```java
public void resetPrivateAccessLevel()
```

##### `resetPrivateAccessSettingsId` <a name="resetPrivateAccessSettingsId" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetPrivateAccessSettingsId"></a>

```java
public void resetPrivateAccessSettingsId()
```

##### `resetPublicAccessEnabled` <a name="resetPublicAccessEnabled" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetPublicAccessEnabled"></a>

```java
public void resetPublicAccessEnabled()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetStatus"></a>

```java
public void resetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mws_private_access_settings.MwsPrivateAccessSettings;

MwsPrivateAccessSettings.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mws_private_access_settings.MwsPrivateAccessSettings;

MwsPrivateAccessSettings.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mws_private_access_settings.MwsPrivateAccessSettings;

MwsPrivateAccessSettings.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.allowedVpcEndpointIdsInput">allowedVpcEndpointIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.privateAccessLevelInput">privateAccessLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.privateAccessSettingsIdInput">privateAccessSettingsIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.privateAccessSettingsNameInput">privateAccessSettingsNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.publicAccessEnabledInput">publicAccessEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.allowedVpcEndpointIds">allowedVpcEndpointIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.privateAccessLevel">privateAccessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.privateAccessSettingsId">privateAccessSettingsId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.privateAccessSettingsName">privateAccessSettingsName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.publicAccessEnabled">publicAccessEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `allowedVpcEndpointIdsInput`<sup>Optional</sup> <a name="allowedVpcEndpointIdsInput" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.allowedVpcEndpointIdsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedVpcEndpointIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `privateAccessLevelInput`<sup>Optional</sup> <a name="privateAccessLevelInput" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.privateAccessLevelInput"></a>

```java
public java.lang.String getPrivateAccessLevelInput();
```

- *Type:* java.lang.String

---

##### `privateAccessSettingsIdInput`<sup>Optional</sup> <a name="privateAccessSettingsIdInput" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.privateAccessSettingsIdInput"></a>

```java
public java.lang.String getPrivateAccessSettingsIdInput();
```

- *Type:* java.lang.String

---

##### `privateAccessSettingsNameInput`<sup>Optional</sup> <a name="privateAccessSettingsNameInput" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.privateAccessSettingsNameInput"></a>

```java
public java.lang.String getPrivateAccessSettingsNameInput();
```

- *Type:* java.lang.String

---

##### `publicAccessEnabledInput`<sup>Optional</sup> <a name="publicAccessEnabledInput" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.publicAccessEnabledInput"></a>

```java
public java.lang.Object getPublicAccessEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `allowedVpcEndpointIds`<sup>Required</sup> <a name="allowedVpcEndpointIds" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.allowedVpcEndpointIds"></a>

```java
public java.util.List<java.lang.String> getAllowedVpcEndpointIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `privateAccessLevel`<sup>Required</sup> <a name="privateAccessLevel" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.privateAccessLevel"></a>

```java
public java.lang.String getPrivateAccessLevel();
```

- *Type:* java.lang.String

---

##### `privateAccessSettingsId`<sup>Required</sup> <a name="privateAccessSettingsId" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.privateAccessSettingsId"></a>

```java
public java.lang.String getPrivateAccessSettingsId();
```

- *Type:* java.lang.String

---

##### `privateAccessSettingsName`<sup>Required</sup> <a name="privateAccessSettingsName" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.privateAccessSettingsName"></a>

```java
public java.lang.String getPrivateAccessSettingsName();
```

- *Type:* java.lang.String

---

##### `publicAccessEnabled`<sup>Required</sup> <a name="publicAccessEnabled" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.publicAccessEnabled"></a>

```java
public java.lang.Object getPublicAccessEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MwsPrivateAccessSettingsConfig <a name="MwsPrivateAccessSettingsConfig" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mws_private_access_settings.MwsPrivateAccessSettingsConfig;

MwsPrivateAccessSettingsConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .privateAccessSettingsName(java.lang.String)
    .region(java.lang.String)
//  .accountId(java.lang.String)
//  .allowedVpcEndpointIds(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .privateAccessLevel(java.lang.String)
//  .privateAccessSettingsId(java.lang.String)
//  .publicAccessEnabled(java.lang.Boolean)
//  .publicAccessEnabled(IResolvable)
//  .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.privateAccessSettingsName">privateAccessSettingsName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/mws_private_access_settings#private_access_settings_name MwsPrivateAccessSettings#private_access_settings_name}. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/mws_private_access_settings#region MwsPrivateAccessSettings#region}. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/mws_private_access_settings#account_id MwsPrivateAccessSettings#account_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.allowedVpcEndpointIds">allowedVpcEndpointIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/mws_private_access_settings#allowed_vpc_endpoint_ids MwsPrivateAccessSettings#allowed_vpc_endpoint_ids}. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/mws_private_access_settings#id MwsPrivateAccessSettings#id}. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.privateAccessLevel">privateAccessLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/mws_private_access_settings#private_access_level MwsPrivateAccessSettings#private_access_level}. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.privateAccessSettingsId">privateAccessSettingsId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/mws_private_access_settings#private_access_settings_id MwsPrivateAccessSettings#private_access_settings_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.publicAccessEnabled">publicAccessEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/mws_private_access_settings#public_access_enabled MwsPrivateAccessSettings#public_access_enabled}. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/mws_private_access_settings#status MwsPrivateAccessSettings#status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `privateAccessSettingsName`<sup>Required</sup> <a name="privateAccessSettingsName" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.privateAccessSettingsName"></a>

```java
public java.lang.String getPrivateAccessSettingsName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/mws_private_access_settings#private_access_settings_name MwsPrivateAccessSettings#private_access_settings_name}.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/mws_private_access_settings#region MwsPrivateAccessSettings#region}.

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/mws_private_access_settings#account_id MwsPrivateAccessSettings#account_id}.

---

##### `allowedVpcEndpointIds`<sup>Optional</sup> <a name="allowedVpcEndpointIds" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.allowedVpcEndpointIds"></a>

```java
public java.util.List<java.lang.String> getAllowedVpcEndpointIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/mws_private_access_settings#allowed_vpc_endpoint_ids MwsPrivateAccessSettings#allowed_vpc_endpoint_ids}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/mws_private_access_settings#id MwsPrivateAccessSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `privateAccessLevel`<sup>Optional</sup> <a name="privateAccessLevel" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.privateAccessLevel"></a>

```java
public java.lang.String getPrivateAccessLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/mws_private_access_settings#private_access_level MwsPrivateAccessSettings#private_access_level}.

---

##### `privateAccessSettingsId`<sup>Optional</sup> <a name="privateAccessSettingsId" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.privateAccessSettingsId"></a>

```java
public java.lang.String getPrivateAccessSettingsId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/mws_private_access_settings#private_access_settings_id MwsPrivateAccessSettings#private_access_settings_id}.

---

##### `publicAccessEnabled`<sup>Optional</sup> <a name="publicAccessEnabled" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.publicAccessEnabled"></a>

```java
public java.lang.Object getPublicAccessEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/mws_private_access_settings#public_access_enabled MwsPrivateAccessSettings#public_access_enabled}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/mws_private_access_settings#status MwsPrivateAccessSettings#status}.

---



