# `sqlGlobalConfig` Submodule <a name="`sqlGlobalConfig` Submodule" id="@cdktf/provider-databricks.sqlGlobalConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqlGlobalConfig <a name="SqlGlobalConfig" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/sql_global_config databricks_sql_global_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_global_config.SqlGlobalConfig;

SqlGlobalConfig.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .dataAccessConfig(java.util.Map<java.lang.String, java.lang.String>)
//  .enableServerlessCompute(java.lang.Boolean|IResolvable)
//  .googleServiceAccount(java.lang.String)
//  .id(java.lang.String)
//  .instanceProfileArn(java.lang.String)
//  .securityPolicy(java.lang.String)
//  .sqlConfigParams(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.dataAccessConfig">dataAccessConfig</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/sql_global_config#data_access_config SqlGlobalConfig#data_access_config}. |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.enableServerlessCompute">enableServerlessCompute</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/sql_global_config#enable_serverless_compute SqlGlobalConfig#enable_serverless_compute}. |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.googleServiceAccount">googleServiceAccount</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/sql_global_config#google_service_account SqlGlobalConfig#google_service_account}. |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/sql_global_config#id SqlGlobalConfig#id}. |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.instanceProfileArn">instanceProfileArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/sql_global_config#instance_profile_arn SqlGlobalConfig#instance_profile_arn}. |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.securityPolicy">securityPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/sql_global_config#security_policy SqlGlobalConfig#security_policy}. |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.sqlConfigParams">sqlConfigParams</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/sql_global_config#sql_config_params SqlGlobalConfig#sql_config_params}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataAccessConfig`<sup>Optional</sup> <a name="dataAccessConfig" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.dataAccessConfig"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/sql_global_config#data_access_config SqlGlobalConfig#data_access_config}.

---

##### `enableServerlessCompute`<sup>Optional</sup> <a name="enableServerlessCompute" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.enableServerlessCompute"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/sql_global_config#enable_serverless_compute SqlGlobalConfig#enable_serverless_compute}.

---

##### `googleServiceAccount`<sup>Optional</sup> <a name="googleServiceAccount" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.googleServiceAccount"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/sql_global_config#google_service_account SqlGlobalConfig#google_service_account}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/sql_global_config#id SqlGlobalConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceProfileArn`<sup>Optional</sup> <a name="instanceProfileArn" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.instanceProfileArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/sql_global_config#instance_profile_arn SqlGlobalConfig#instance_profile_arn}.

---

##### `securityPolicy`<sup>Optional</sup> <a name="securityPolicy" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.securityPolicy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/sql_global_config#security_policy SqlGlobalConfig#security_policy}.

---

##### `sqlConfigParams`<sup>Optional</sup> <a name="sqlConfigParams" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.sqlConfigParams"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/sql_global_config#sql_config_params SqlGlobalConfig#sql_config_params}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.resetDataAccessConfig">resetDataAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.resetEnableServerlessCompute">resetEnableServerlessCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.resetGoogleServiceAccount">resetGoogleServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.resetInstanceProfileArn">resetInstanceProfileArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.resetSecurityPolicy">resetSecurityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.resetSqlConfigParams">resetSqlConfigParams</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDataAccessConfig` <a name="resetDataAccessConfig" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.resetDataAccessConfig"></a>

```java
public void resetDataAccessConfig()
```

##### `resetEnableServerlessCompute` <a name="resetEnableServerlessCompute" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.resetEnableServerlessCompute"></a>

```java
public void resetEnableServerlessCompute()
```

##### `resetGoogleServiceAccount` <a name="resetGoogleServiceAccount" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.resetGoogleServiceAccount"></a>

```java
public void resetGoogleServiceAccount()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.resetId"></a>

```java
public void resetId()
```

##### `resetInstanceProfileArn` <a name="resetInstanceProfileArn" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.resetInstanceProfileArn"></a>

```java
public void resetInstanceProfileArn()
```

##### `resetSecurityPolicy` <a name="resetSecurityPolicy" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.resetSecurityPolicy"></a>

```java
public void resetSecurityPolicy()
```

##### `resetSqlConfigParams` <a name="resetSqlConfigParams" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.resetSqlConfigParams"></a>

```java
public void resetSqlConfigParams()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SqlGlobalConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_global_config.SqlGlobalConfig;

SqlGlobalConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_global_config.SqlGlobalConfig;

SqlGlobalConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_global_config.SqlGlobalConfig;

SqlGlobalConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_global_config.SqlGlobalConfig;

SqlGlobalConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SqlGlobalConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SqlGlobalConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SqlGlobalConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SqlGlobalConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/sql_global_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SqlGlobalConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.dataAccessConfigInput">dataAccessConfigInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.enableServerlessComputeInput">enableServerlessComputeInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.googleServiceAccountInput">googleServiceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.instanceProfileArnInput">instanceProfileArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.securityPolicyInput">securityPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.sqlConfigParamsInput">sqlConfigParamsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.dataAccessConfig">dataAccessConfig</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.enableServerlessCompute">enableServerlessCompute</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.googleServiceAccount">googleServiceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.instanceProfileArn">instanceProfileArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.securityPolicy">securityPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.sqlConfigParams">sqlConfigParams</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataAccessConfigInput`<sup>Optional</sup> <a name="dataAccessConfigInput" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.dataAccessConfigInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDataAccessConfigInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `enableServerlessComputeInput`<sup>Optional</sup> <a name="enableServerlessComputeInput" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.enableServerlessComputeInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableServerlessComputeInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `googleServiceAccountInput`<sup>Optional</sup> <a name="googleServiceAccountInput" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.googleServiceAccountInput"></a>

```java
public java.lang.String getGoogleServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceProfileArnInput`<sup>Optional</sup> <a name="instanceProfileArnInput" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.instanceProfileArnInput"></a>

```java
public java.lang.String getInstanceProfileArnInput();
```

- *Type:* java.lang.String

---

##### `securityPolicyInput`<sup>Optional</sup> <a name="securityPolicyInput" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.securityPolicyInput"></a>

```java
public java.lang.String getSecurityPolicyInput();
```

- *Type:* java.lang.String

---

##### `sqlConfigParamsInput`<sup>Optional</sup> <a name="sqlConfigParamsInput" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.sqlConfigParamsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSqlConfigParamsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `dataAccessConfig`<sup>Required</sup> <a name="dataAccessConfig" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.dataAccessConfig"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDataAccessConfig();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `enableServerlessCompute`<sup>Required</sup> <a name="enableServerlessCompute" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.enableServerlessCompute"></a>

```java
public java.lang.Boolean|IResolvable getEnableServerlessCompute();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `googleServiceAccount`<sup>Required</sup> <a name="googleServiceAccount" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.googleServiceAccount"></a>

```java
public java.lang.String getGoogleServiceAccount();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceProfileArn`<sup>Required</sup> <a name="instanceProfileArn" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.instanceProfileArn"></a>

```java
public java.lang.String getInstanceProfileArn();
```

- *Type:* java.lang.String

---

##### `securityPolicy`<sup>Required</sup> <a name="securityPolicy" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.securityPolicy"></a>

```java
public java.lang.String getSecurityPolicy();
```

- *Type:* java.lang.String

---

##### `sqlConfigParams`<sup>Required</sup> <a name="sqlConfigParams" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.sqlConfigParams"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSqlConfigParams();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SqlGlobalConfigConfig <a name="SqlGlobalConfigConfig" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_global_config.SqlGlobalConfigConfig;

SqlGlobalConfigConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .dataAccessConfig(java.util.Map<java.lang.String, java.lang.String>)
//  .enableServerlessCompute(java.lang.Boolean|IResolvable)
//  .googleServiceAccount(java.lang.String)
//  .id(java.lang.String)
//  .instanceProfileArn(java.lang.String)
//  .securityPolicy(java.lang.String)
//  .sqlConfigParams(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.dataAccessConfig">dataAccessConfig</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/sql_global_config#data_access_config SqlGlobalConfig#data_access_config}. |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.enableServerlessCompute">enableServerlessCompute</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/sql_global_config#enable_serverless_compute SqlGlobalConfig#enable_serverless_compute}. |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.googleServiceAccount">googleServiceAccount</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/sql_global_config#google_service_account SqlGlobalConfig#google_service_account}. |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/sql_global_config#id SqlGlobalConfig#id}. |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.instanceProfileArn">instanceProfileArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/sql_global_config#instance_profile_arn SqlGlobalConfig#instance_profile_arn}. |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.securityPolicy">securityPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/sql_global_config#security_policy SqlGlobalConfig#security_policy}. |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.sqlConfigParams">sqlConfigParams</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/sql_global_config#sql_config_params SqlGlobalConfig#sql_config_params}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataAccessConfig`<sup>Optional</sup> <a name="dataAccessConfig" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.dataAccessConfig"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDataAccessConfig();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/sql_global_config#data_access_config SqlGlobalConfig#data_access_config}.

---

##### `enableServerlessCompute`<sup>Optional</sup> <a name="enableServerlessCompute" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.enableServerlessCompute"></a>

```java
public java.lang.Boolean|IResolvable getEnableServerlessCompute();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/sql_global_config#enable_serverless_compute SqlGlobalConfig#enable_serverless_compute}.

---

##### `googleServiceAccount`<sup>Optional</sup> <a name="googleServiceAccount" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.googleServiceAccount"></a>

```java
public java.lang.String getGoogleServiceAccount();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/sql_global_config#google_service_account SqlGlobalConfig#google_service_account}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/sql_global_config#id SqlGlobalConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceProfileArn`<sup>Optional</sup> <a name="instanceProfileArn" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.instanceProfileArn"></a>

```java
public java.lang.String getInstanceProfileArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/sql_global_config#instance_profile_arn SqlGlobalConfig#instance_profile_arn}.

---

##### `securityPolicy`<sup>Optional</sup> <a name="securityPolicy" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.securityPolicy"></a>

```java
public java.lang.String getSecurityPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/sql_global_config#security_policy SqlGlobalConfig#security_policy}.

---

##### `sqlConfigParams`<sup>Optional</sup> <a name="sqlConfigParams" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.sqlConfigParams"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSqlConfigParams();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/sql_global_config#sql_config_params SqlGlobalConfig#sql_config_params}.

---



