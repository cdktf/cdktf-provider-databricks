# `mwsLogDelivery` Submodule <a name="`mwsLogDelivery` Submodule" id="@cdktf/provider-databricks.mwsLogDelivery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MwsLogDelivery <a name="MwsLogDelivery" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/mws_log_delivery databricks_mws_log_delivery}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mws_log_delivery.MwsLogDelivery;

MwsLogDelivery.Builder.create(Construct scope, java.lang.String id)
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
    .accountId(java.lang.String)
    .credentialsId(java.lang.String)
    .logType(java.lang.String)
    .outputFormat(java.lang.String)
    .storageConfigurationId(java.lang.String)
//  .configId(java.lang.String)
//  .configName(java.lang.String)
//  .deliveryPathPrefix(java.lang.String)
//  .deliveryStartTime(java.lang.String)
//  .id(java.lang.String)
//  .status(java.lang.String)
//  .workspaceIdsFilter(java.util.List<java.lang.Number>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/mws_log_delivery#account_id MwsLogDelivery#account_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.credentialsId">credentialsId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/mws_log_delivery#credentials_id MwsLogDelivery#credentials_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.logType">logType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/mws_log_delivery#log_type MwsLogDelivery#log_type}. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.outputFormat">outputFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/mws_log_delivery#output_format MwsLogDelivery#output_format}. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.storageConfigurationId">storageConfigurationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/mws_log_delivery#storage_configuration_id MwsLogDelivery#storage_configuration_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.configId">configId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/mws_log_delivery#config_id MwsLogDelivery#config_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.configName">configName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/mws_log_delivery#config_name MwsLogDelivery#config_name}. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.deliveryPathPrefix">deliveryPathPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/mws_log_delivery#delivery_path_prefix MwsLogDelivery#delivery_path_prefix}. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.deliveryStartTime">deliveryStartTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/mws_log_delivery#delivery_start_time MwsLogDelivery#delivery_start_time}. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/mws_log_delivery#id MwsLogDelivery#id}. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/mws_log_delivery#status MwsLogDelivery#status}. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.workspaceIdsFilter">workspaceIdsFilter</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/mws_log_delivery#workspace_ids_filter MwsLogDelivery#workspace_ids_filter}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/mws_log_delivery#account_id MwsLogDelivery#account_id}.

---

##### `credentialsId`<sup>Required</sup> <a name="credentialsId" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.credentialsId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/mws_log_delivery#credentials_id MwsLogDelivery#credentials_id}.

---

##### `logType`<sup>Required</sup> <a name="logType" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.logType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/mws_log_delivery#log_type MwsLogDelivery#log_type}.

---

##### `outputFormat`<sup>Required</sup> <a name="outputFormat" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.outputFormat"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/mws_log_delivery#output_format MwsLogDelivery#output_format}.

---

##### `storageConfigurationId`<sup>Required</sup> <a name="storageConfigurationId" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.storageConfigurationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/mws_log_delivery#storage_configuration_id MwsLogDelivery#storage_configuration_id}.

---

##### `configId`<sup>Optional</sup> <a name="configId" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.configId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/mws_log_delivery#config_id MwsLogDelivery#config_id}.

---

##### `configName`<sup>Optional</sup> <a name="configName" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.configName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/mws_log_delivery#config_name MwsLogDelivery#config_name}.

---

##### `deliveryPathPrefix`<sup>Optional</sup> <a name="deliveryPathPrefix" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.deliveryPathPrefix"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/mws_log_delivery#delivery_path_prefix MwsLogDelivery#delivery_path_prefix}.

---

##### `deliveryStartTime`<sup>Optional</sup> <a name="deliveryStartTime" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.deliveryStartTime"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/mws_log_delivery#delivery_start_time MwsLogDelivery#delivery_start_time}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/mws_log_delivery#id MwsLogDelivery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/mws_log_delivery#status MwsLogDelivery#status}.

---

##### `workspaceIdsFilter`<sup>Optional</sup> <a name="workspaceIdsFilter" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.workspaceIdsFilter"></a>

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/mws_log_delivery#workspace_ids_filter MwsLogDelivery#workspace_ids_filter}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.resetConfigId">resetConfigId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.resetConfigName">resetConfigName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.resetDeliveryPathPrefix">resetDeliveryPathPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.resetDeliveryStartTime">resetDeliveryStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.resetWorkspaceIdsFilter">resetWorkspaceIdsFilter</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetConfigId` <a name="resetConfigId" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.resetConfigId"></a>

```java
public void resetConfigId()
```

##### `resetConfigName` <a name="resetConfigName" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.resetConfigName"></a>

```java
public void resetConfigName()
```

##### `resetDeliveryPathPrefix` <a name="resetDeliveryPathPrefix" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.resetDeliveryPathPrefix"></a>

```java
public void resetDeliveryPathPrefix()
```

##### `resetDeliveryStartTime` <a name="resetDeliveryStartTime" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.resetDeliveryStartTime"></a>

```java
public void resetDeliveryStartTime()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.resetId"></a>

```java
public void resetId()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetWorkspaceIdsFilter` <a name="resetWorkspaceIdsFilter" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.resetWorkspaceIdsFilter"></a>

```java
public void resetWorkspaceIdsFilter()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MwsLogDelivery resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mws_log_delivery.MwsLogDelivery;

MwsLogDelivery.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mws_log_delivery.MwsLogDelivery;

MwsLogDelivery.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mws_log_delivery.MwsLogDelivery;

MwsLogDelivery.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mws_log_delivery.MwsLogDelivery;

MwsLogDelivery.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MwsLogDelivery.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a MwsLogDelivery resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MwsLogDelivery to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MwsLogDelivery that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/mws_log_delivery#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the MwsLogDelivery to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.configIdInput">configIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.configNameInput">configNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.credentialsIdInput">credentialsIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.deliveryPathPrefixInput">deliveryPathPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.deliveryStartTimeInput">deliveryStartTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.logTypeInput">logTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.outputFormatInput">outputFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.storageConfigurationIdInput">storageConfigurationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.workspaceIdsFilterInput">workspaceIdsFilterInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.configId">configId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.configName">configName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.credentialsId">credentialsId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.deliveryPathPrefix">deliveryPathPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.deliveryStartTime">deliveryStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.logType">logType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.outputFormat">outputFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.storageConfigurationId">storageConfigurationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.workspaceIdsFilter">workspaceIdsFilter</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `configIdInput`<sup>Optional</sup> <a name="configIdInput" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.configIdInput"></a>

```java
public java.lang.String getConfigIdInput();
```

- *Type:* java.lang.String

---

##### `configNameInput`<sup>Optional</sup> <a name="configNameInput" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.configNameInput"></a>

```java
public java.lang.String getConfigNameInput();
```

- *Type:* java.lang.String

---

##### `credentialsIdInput`<sup>Optional</sup> <a name="credentialsIdInput" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.credentialsIdInput"></a>

```java
public java.lang.String getCredentialsIdInput();
```

- *Type:* java.lang.String

---

##### `deliveryPathPrefixInput`<sup>Optional</sup> <a name="deliveryPathPrefixInput" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.deliveryPathPrefixInput"></a>

```java
public java.lang.String getDeliveryPathPrefixInput();
```

- *Type:* java.lang.String

---

##### `deliveryStartTimeInput`<sup>Optional</sup> <a name="deliveryStartTimeInput" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.deliveryStartTimeInput"></a>

```java
public java.lang.String getDeliveryStartTimeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `logTypeInput`<sup>Optional</sup> <a name="logTypeInput" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.logTypeInput"></a>

```java
public java.lang.String getLogTypeInput();
```

- *Type:* java.lang.String

---

##### `outputFormatInput`<sup>Optional</sup> <a name="outputFormatInput" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.outputFormatInput"></a>

```java
public java.lang.String getOutputFormatInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `storageConfigurationIdInput`<sup>Optional</sup> <a name="storageConfigurationIdInput" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.storageConfigurationIdInput"></a>

```java
public java.lang.String getStorageConfigurationIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceIdsFilterInput`<sup>Optional</sup> <a name="workspaceIdsFilterInput" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.workspaceIdsFilterInput"></a>

```java
public java.util.List<java.lang.Number> getWorkspaceIdsFilterInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `configId`<sup>Required</sup> <a name="configId" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.configId"></a>

```java
public java.lang.String getConfigId();
```

- *Type:* java.lang.String

---

##### `configName`<sup>Required</sup> <a name="configName" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.configName"></a>

```java
public java.lang.String getConfigName();
```

- *Type:* java.lang.String

---

##### `credentialsId`<sup>Required</sup> <a name="credentialsId" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.credentialsId"></a>

```java
public java.lang.String getCredentialsId();
```

- *Type:* java.lang.String

---

##### `deliveryPathPrefix`<sup>Required</sup> <a name="deliveryPathPrefix" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.deliveryPathPrefix"></a>

```java
public java.lang.String getDeliveryPathPrefix();
```

- *Type:* java.lang.String

---

##### `deliveryStartTime`<sup>Required</sup> <a name="deliveryStartTime" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.deliveryStartTime"></a>

```java
public java.lang.String getDeliveryStartTime();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `logType`<sup>Required</sup> <a name="logType" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.logType"></a>

```java
public java.lang.String getLogType();
```

- *Type:* java.lang.String

---

##### `outputFormat`<sup>Required</sup> <a name="outputFormat" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.outputFormat"></a>

```java
public java.lang.String getOutputFormat();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `storageConfigurationId`<sup>Required</sup> <a name="storageConfigurationId" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.storageConfigurationId"></a>

```java
public java.lang.String getStorageConfigurationId();
```

- *Type:* java.lang.String

---

##### `workspaceIdsFilter`<sup>Required</sup> <a name="workspaceIdsFilter" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.workspaceIdsFilter"></a>

```java
public java.util.List<java.lang.Number> getWorkspaceIdsFilter();
```

- *Type:* java.util.List<java.lang.Number>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MwsLogDeliveryConfig <a name="MwsLogDeliveryConfig" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.mws_log_delivery.MwsLogDeliveryConfig;

MwsLogDeliveryConfig.builder()
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
    .accountId(java.lang.String)
    .credentialsId(java.lang.String)
    .logType(java.lang.String)
    .outputFormat(java.lang.String)
    .storageConfigurationId(java.lang.String)
//  .configId(java.lang.String)
//  .configName(java.lang.String)
//  .deliveryPathPrefix(java.lang.String)
//  .deliveryStartTime(java.lang.String)
//  .id(java.lang.String)
//  .status(java.lang.String)
//  .workspaceIdsFilter(java.util.List<java.lang.Number>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/mws_log_delivery#account_id MwsLogDelivery#account_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.credentialsId">credentialsId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/mws_log_delivery#credentials_id MwsLogDelivery#credentials_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.logType">logType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/mws_log_delivery#log_type MwsLogDelivery#log_type}. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.outputFormat">outputFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/mws_log_delivery#output_format MwsLogDelivery#output_format}. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.storageConfigurationId">storageConfigurationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/mws_log_delivery#storage_configuration_id MwsLogDelivery#storage_configuration_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.configId">configId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/mws_log_delivery#config_id MwsLogDelivery#config_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.configName">configName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/mws_log_delivery#config_name MwsLogDelivery#config_name}. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.deliveryPathPrefix">deliveryPathPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/mws_log_delivery#delivery_path_prefix MwsLogDelivery#delivery_path_prefix}. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.deliveryStartTime">deliveryStartTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/mws_log_delivery#delivery_start_time MwsLogDelivery#delivery_start_time}. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/mws_log_delivery#id MwsLogDelivery#id}. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/mws_log_delivery#status MwsLogDelivery#status}. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.workspaceIdsFilter">workspaceIdsFilter</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/mws_log_delivery#workspace_ids_filter MwsLogDelivery#workspace_ids_filter}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/mws_log_delivery#account_id MwsLogDelivery#account_id}.

---

##### `credentialsId`<sup>Required</sup> <a name="credentialsId" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.credentialsId"></a>

```java
public java.lang.String getCredentialsId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/mws_log_delivery#credentials_id MwsLogDelivery#credentials_id}.

---

##### `logType`<sup>Required</sup> <a name="logType" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.logType"></a>

```java
public java.lang.String getLogType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/mws_log_delivery#log_type MwsLogDelivery#log_type}.

---

##### `outputFormat`<sup>Required</sup> <a name="outputFormat" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.outputFormat"></a>

```java
public java.lang.String getOutputFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/mws_log_delivery#output_format MwsLogDelivery#output_format}.

---

##### `storageConfigurationId`<sup>Required</sup> <a name="storageConfigurationId" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.storageConfigurationId"></a>

```java
public java.lang.String getStorageConfigurationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/mws_log_delivery#storage_configuration_id MwsLogDelivery#storage_configuration_id}.

---

##### `configId`<sup>Optional</sup> <a name="configId" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.configId"></a>

```java
public java.lang.String getConfigId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/mws_log_delivery#config_id MwsLogDelivery#config_id}.

---

##### `configName`<sup>Optional</sup> <a name="configName" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.configName"></a>

```java
public java.lang.String getConfigName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/mws_log_delivery#config_name MwsLogDelivery#config_name}.

---

##### `deliveryPathPrefix`<sup>Optional</sup> <a name="deliveryPathPrefix" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.deliveryPathPrefix"></a>

```java
public java.lang.String getDeliveryPathPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/mws_log_delivery#delivery_path_prefix MwsLogDelivery#delivery_path_prefix}.

---

##### `deliveryStartTime`<sup>Optional</sup> <a name="deliveryStartTime" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.deliveryStartTime"></a>

```java
public java.lang.String getDeliveryStartTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/mws_log_delivery#delivery_start_time MwsLogDelivery#delivery_start_time}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/mws_log_delivery#id MwsLogDelivery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/mws_log_delivery#status MwsLogDelivery#status}.

---

##### `workspaceIdsFilter`<sup>Optional</sup> <a name="workspaceIdsFilter" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.workspaceIdsFilter"></a>

```java
public java.util.List<java.lang.Number> getWorkspaceIdsFilter();
```

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/mws_log_delivery#workspace_ids_filter MwsLogDelivery#workspace_ids_filter}.

---



