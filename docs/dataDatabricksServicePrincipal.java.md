# `data_databricks_service_principal`

Refer to the Terraform Registory for docs: [`data_databricks_service_principal`](https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/service_principal).

# `dataDatabricksServicePrincipal` Submodule <a name="`dataDatabricksServicePrincipal` Submodule" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksServicePrincipal <a name="DataDatabricksServicePrincipal" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/service_principal databricks_service_principal}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_service_principal.DataDatabricksServicePrincipal;

DataDatabricksServicePrincipal.Builder.create(Construct scope, java.lang.String id)
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
//  .aclPrincipalId(java.lang.String)
//  .active(java.lang.Boolean)
//  .active(IResolvable)
//  .applicationId(java.lang.String)
//  .displayName(java.lang.String)
//  .externalId(java.lang.String)
//  .home(java.lang.String)
//  .id(java.lang.String)
//  .repos(java.lang.String)
//  .spId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.Initializer.parameter.aclPrincipalId">aclPrincipalId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/service_principal#acl_principal_id DataDatabricksServicePrincipal#acl_principal_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.Initializer.parameter.active">active</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/service_principal#active DataDatabricksServicePrincipal#active}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.Initializer.parameter.applicationId">applicationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/service_principal#application_id DataDatabricksServicePrincipal#application_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/service_principal#display_name DataDatabricksServicePrincipal#display_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.Initializer.parameter.externalId">externalId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/service_principal#external_id DataDatabricksServicePrincipal#external_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.Initializer.parameter.home">home</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/service_principal#home DataDatabricksServicePrincipal#home}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/service_principal#id DataDatabricksServicePrincipal#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.Initializer.parameter.repos">repos</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/service_principal#repos DataDatabricksServicePrincipal#repos}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.Initializer.parameter.spId">spId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/service_principal#sp_id DataDatabricksServicePrincipal#sp_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `aclPrincipalId`<sup>Optional</sup> <a name="aclPrincipalId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.Initializer.parameter.aclPrincipalId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/service_principal#acl_principal_id DataDatabricksServicePrincipal#acl_principal_id}.

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.Initializer.parameter.active"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/service_principal#active DataDatabricksServicePrincipal#active}.

---

##### `applicationId`<sup>Optional</sup> <a name="applicationId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.Initializer.parameter.applicationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/service_principal#application_id DataDatabricksServicePrincipal#application_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/service_principal#display_name DataDatabricksServicePrincipal#display_name}.

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.Initializer.parameter.externalId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/service_principal#external_id DataDatabricksServicePrincipal#external_id}.

---

##### `home`<sup>Optional</sup> <a name="home" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.Initializer.parameter.home"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/service_principal#home DataDatabricksServicePrincipal#home}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/service_principal#id DataDatabricksServicePrincipal#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `repos`<sup>Optional</sup> <a name="repos" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.Initializer.parameter.repos"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/service_principal#repos DataDatabricksServicePrincipal#repos}.

---

##### `spId`<sup>Optional</sup> <a name="spId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.Initializer.parameter.spId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/service_principal#sp_id DataDatabricksServicePrincipal#sp_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.resetAclPrincipalId">resetAclPrincipalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.resetActive">resetActive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.resetApplicationId">resetApplicationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.resetExternalId">resetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.resetHome">resetHome</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.resetRepos">resetRepos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.resetSpId">resetSpId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAclPrincipalId` <a name="resetAclPrincipalId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.resetAclPrincipalId"></a>

```java
public void resetAclPrincipalId()
```

##### `resetActive` <a name="resetActive" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.resetActive"></a>

```java
public void resetActive()
```

##### `resetApplicationId` <a name="resetApplicationId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.resetApplicationId"></a>

```java
public void resetApplicationId()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetExternalId` <a name="resetExternalId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.resetExternalId"></a>

```java
public void resetExternalId()
```

##### `resetHome` <a name="resetHome" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.resetHome"></a>

```java
public void resetHome()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.resetId"></a>

```java
public void resetId()
```

##### `resetRepos` <a name="resetRepos" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.resetRepos"></a>

```java
public void resetRepos()
```

##### `resetSpId` <a name="resetSpId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.resetSpId"></a>

```java
public void resetSpId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_service_principal.DataDatabricksServicePrincipal;

DataDatabricksServicePrincipal.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_service_principal.DataDatabricksServicePrincipal;

DataDatabricksServicePrincipal.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_service_principal.DataDatabricksServicePrincipal;

DataDatabricksServicePrincipal.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.aclPrincipalIdInput">aclPrincipalIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.activeInput">activeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.applicationIdInput">applicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.externalIdInput">externalIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.homeInput">homeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.reposInput">reposInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.spIdInput">spIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.aclPrincipalId">aclPrincipalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.active">active</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.externalId">externalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.home">home</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.repos">repos</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.spId">spId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `aclPrincipalIdInput`<sup>Optional</sup> <a name="aclPrincipalIdInput" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.aclPrincipalIdInput"></a>

```java
public java.lang.String getAclPrincipalIdInput();
```

- *Type:* java.lang.String

---

##### `activeInput`<sup>Optional</sup> <a name="activeInput" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.activeInput"></a>

```java
public java.lang.Object getActiveInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.applicationIdInput"></a>

```java
public java.lang.String getApplicationIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.externalIdInput"></a>

```java
public java.lang.String getExternalIdInput();
```

- *Type:* java.lang.String

---

##### `homeInput`<sup>Optional</sup> <a name="homeInput" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.homeInput"></a>

```java
public java.lang.String getHomeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `reposInput`<sup>Optional</sup> <a name="reposInput" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.reposInput"></a>

```java
public java.lang.String getReposInput();
```

- *Type:* java.lang.String

---

##### `spIdInput`<sup>Optional</sup> <a name="spIdInput" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.spIdInput"></a>

```java
public java.lang.String getSpIdInput();
```

- *Type:* java.lang.String

---

##### `aclPrincipalId`<sup>Required</sup> <a name="aclPrincipalId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.aclPrincipalId"></a>

```java
public java.lang.String getAclPrincipalId();
```

- *Type:* java.lang.String

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.active"></a>

```java
public java.lang.Object getActive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

---

##### `home`<sup>Required</sup> <a name="home" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.home"></a>

```java
public java.lang.String getHome();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `repos`<sup>Required</sup> <a name="repos" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.repos"></a>

```java
public java.lang.String getRepos();
```

- *Type:* java.lang.String

---

##### `spId`<sup>Required</sup> <a name="spId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.spId"></a>

```java
public java.lang.String getSpId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksServicePrincipalConfig <a name="DataDatabricksServicePrincipalConfig" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_service_principal.DataDatabricksServicePrincipalConfig;

DataDatabricksServicePrincipalConfig.builder()
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
//  .aclPrincipalId(java.lang.String)
//  .active(java.lang.Boolean)
//  .active(IResolvable)
//  .applicationId(java.lang.String)
//  .displayName(java.lang.String)
//  .externalId(java.lang.String)
//  .home(java.lang.String)
//  .id(java.lang.String)
//  .repos(java.lang.String)
//  .spId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig.property.aclPrincipalId">aclPrincipalId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/service_principal#acl_principal_id DataDatabricksServicePrincipal#acl_principal_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig.property.active">active</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/service_principal#active DataDatabricksServicePrincipal#active}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/service_principal#application_id DataDatabricksServicePrincipal#application_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/service_principal#display_name DataDatabricksServicePrincipal#display_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig.property.externalId">externalId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/service_principal#external_id DataDatabricksServicePrincipal#external_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig.property.home">home</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/service_principal#home DataDatabricksServicePrincipal#home}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/service_principal#id DataDatabricksServicePrincipal#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig.property.repos">repos</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/service_principal#repos DataDatabricksServicePrincipal#repos}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig.property.spId">spId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/service_principal#sp_id DataDatabricksServicePrincipal#sp_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `aclPrincipalId`<sup>Optional</sup> <a name="aclPrincipalId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig.property.aclPrincipalId"></a>

```java
public java.lang.String getAclPrincipalId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/service_principal#acl_principal_id DataDatabricksServicePrincipal#acl_principal_id}.

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig.property.active"></a>

```java
public java.lang.Object getActive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/service_principal#active DataDatabricksServicePrincipal#active}.

---

##### `applicationId`<sup>Optional</sup> <a name="applicationId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/service_principal#application_id DataDatabricksServicePrincipal#application_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/service_principal#display_name DataDatabricksServicePrincipal#display_name}.

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/service_principal#external_id DataDatabricksServicePrincipal#external_id}.

---

##### `home`<sup>Optional</sup> <a name="home" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig.property.home"></a>

```java
public java.lang.String getHome();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/service_principal#home DataDatabricksServicePrincipal#home}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/service_principal#id DataDatabricksServicePrincipal#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `repos`<sup>Optional</sup> <a name="repos" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig.property.repos"></a>

```java
public java.lang.String getRepos();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/service_principal#repos DataDatabricksServicePrincipal#repos}.

---

##### `spId`<sup>Optional</sup> <a name="spId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig.property.spId"></a>

```java
public java.lang.String getSpId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/service_principal#sp_id DataDatabricksServicePrincipal#sp_id}.

---



