# `alert` Submodule <a name="`alert` Submodule" id="@cdktf/provider-databricks.alert"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Alert <a name="Alert" id="@cdktf/provider-databricks.alert.Alert"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/alert databricks_alert}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.alert.Alert.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.alert.Alert;

Alert.Builder.create(Construct scope, java.lang.String id)
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
    .condition(AlertCondition)
    .displayName(java.lang.String)
    .queryId(java.lang.String)
//  .customBody(java.lang.String)
//  .customSubject(java.lang.String)
//  .notifyOnOk(java.lang.Boolean)
//  .notifyOnOk(IResolvable)
//  .ownerUserName(java.lang.String)
//  .parentPath(java.lang.String)
//  .secondsToRetrigger(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-databricks.alert.AlertCondition">AlertCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/alert#display_name Alert#display_name}. |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.Initializer.parameter.queryId">queryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/alert#query_id Alert#query_id}. |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.Initializer.parameter.customBody">customBody</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/alert#custom_body Alert#custom_body}. |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.Initializer.parameter.customSubject">customSubject</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/alert#custom_subject Alert#custom_subject}. |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.Initializer.parameter.notifyOnOk">notifyOnOk</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/alert#notify_on_ok Alert#notify_on_ok}. |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.Initializer.parameter.ownerUserName">ownerUserName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/alert#owner_user_name Alert#owner_user_name}. |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.Initializer.parameter.parentPath">parentPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/alert#parent_path Alert#parent_path}. |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.Initializer.parameter.secondsToRetrigger">secondsToRetrigger</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/alert#seconds_to_retrigger Alert#seconds_to_retrigger}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.alert.Alert.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.alert.Alert.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.alert.Alert.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.alert.Alert.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.alert.Alert.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.alert.Alert.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.alert.Alert.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.alert.Alert.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.alert.Alert.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-databricks.alert.Alert.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-databricks.alert.AlertCondition">AlertCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/alert#condition Alert#condition}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-databricks.alert.Alert.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/alert#display_name Alert#display_name}.

---

##### `queryId`<sup>Required</sup> <a name="queryId" id="@cdktf/provider-databricks.alert.Alert.Initializer.parameter.queryId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/alert#query_id Alert#query_id}.

---

##### `customBody`<sup>Optional</sup> <a name="customBody" id="@cdktf/provider-databricks.alert.Alert.Initializer.parameter.customBody"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/alert#custom_body Alert#custom_body}.

---

##### `customSubject`<sup>Optional</sup> <a name="customSubject" id="@cdktf/provider-databricks.alert.Alert.Initializer.parameter.customSubject"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/alert#custom_subject Alert#custom_subject}.

---

##### `notifyOnOk`<sup>Optional</sup> <a name="notifyOnOk" id="@cdktf/provider-databricks.alert.Alert.Initializer.parameter.notifyOnOk"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/alert#notify_on_ok Alert#notify_on_ok}.

---

##### `ownerUserName`<sup>Optional</sup> <a name="ownerUserName" id="@cdktf/provider-databricks.alert.Alert.Initializer.parameter.ownerUserName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/alert#owner_user_name Alert#owner_user_name}.

---

##### `parentPath`<sup>Optional</sup> <a name="parentPath" id="@cdktf/provider-databricks.alert.Alert.Initializer.parameter.parentPath"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/alert#parent_path Alert#parent_path}.

---

##### `secondsToRetrigger`<sup>Optional</sup> <a name="secondsToRetrigger" id="@cdktf/provider-databricks.alert.Alert.Initializer.parameter.secondsToRetrigger"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/alert#seconds_to_retrigger Alert#seconds_to_retrigger}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.resetCustomBody">resetCustomBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.resetCustomSubject">resetCustomSubject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.resetNotifyOnOk">resetNotifyOnOk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.resetOwnerUserName">resetOwnerUserName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.resetParentPath">resetParentPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.resetSecondsToRetrigger">resetSecondsToRetrigger</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.alert.Alert.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.alert.Alert.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.alert.Alert.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.alert.Alert.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.alert.Alert.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.alert.Alert.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.alert.Alert.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.alert.Alert.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.alert.Alert.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.alert.Alert.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.alert.Alert.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.alert.Alert.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.alert.Alert.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.Alert.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.alert.Alert.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.Alert.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.alert.Alert.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.Alert.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.alert.Alert.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.Alert.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.alert.Alert.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.Alert.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.alert.Alert.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.Alert.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.alert.Alert.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.Alert.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.alert.Alert.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.Alert.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.alert.Alert.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.Alert.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.alert.Alert.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.alert.Alert.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.alert.Alert.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.alert.Alert.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.alert.Alert.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.Alert.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.alert.Alert.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.alert.Alert.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.alert.Alert.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.alert.Alert.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.alert.Alert.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.alert.Alert.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.alert.Alert.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-databricks.alert.Alert.putCondition"></a>

```java
public void putCondition(AlertCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.alert.Alert.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.alert.AlertCondition">AlertCondition</a>

---

##### `resetCustomBody` <a name="resetCustomBody" id="@cdktf/provider-databricks.alert.Alert.resetCustomBody"></a>

```java
public void resetCustomBody()
```

##### `resetCustomSubject` <a name="resetCustomSubject" id="@cdktf/provider-databricks.alert.Alert.resetCustomSubject"></a>

```java
public void resetCustomSubject()
```

##### `resetNotifyOnOk` <a name="resetNotifyOnOk" id="@cdktf/provider-databricks.alert.Alert.resetNotifyOnOk"></a>

```java
public void resetNotifyOnOk()
```

##### `resetOwnerUserName` <a name="resetOwnerUserName" id="@cdktf/provider-databricks.alert.Alert.resetOwnerUserName"></a>

```java
public void resetOwnerUserName()
```

##### `resetParentPath` <a name="resetParentPath" id="@cdktf/provider-databricks.alert.Alert.resetParentPath"></a>

```java
public void resetParentPath()
```

##### `resetSecondsToRetrigger` <a name="resetSecondsToRetrigger" id="@cdktf/provider-databricks.alert.Alert.resetSecondsToRetrigger"></a>

```java
public void resetSecondsToRetrigger()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Alert resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.alert.Alert.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.alert.Alert;

Alert.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.alert.Alert.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.alert.Alert.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.alert.Alert;

Alert.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.alert.Alert.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.alert.Alert.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.alert.Alert;

Alert.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.alert.Alert.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.alert.Alert.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.alert.Alert;

Alert.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Alert.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Alert resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.alert.Alert.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.alert.Alert.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Alert to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.alert.Alert.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Alert that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/alert#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.alert.Alert.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Alert to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOutputReference">AlertConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.lifecycleState">lifecycleState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.triggerTime">triggerTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-databricks.alert.AlertCondition">AlertCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.customBodyInput">customBodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.customSubjectInput">customSubjectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.notifyOnOkInput">notifyOnOkInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.ownerUserNameInput">ownerUserNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.parentPathInput">parentPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.queryIdInput">queryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.secondsToRetriggerInput">secondsToRetriggerInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.customBody">customBody</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.customSubject">customSubject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.notifyOnOk">notifyOnOk</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.ownerUserName">ownerUserName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.parentPath">parentPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.queryId">queryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.secondsToRetrigger">secondsToRetrigger</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.alert.Alert.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.alert.Alert.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.alert.Alert.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.alert.Alert.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.alert.Alert.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.alert.Alert.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.alert.Alert.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.alert.Alert.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.alert.Alert.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.alert.Alert.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.alert.Alert.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.alert.Alert.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.alert.Alert.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.alert.Alert.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-databricks.alert.Alert.property.condition"></a>

```java
public AlertConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktf/provider-databricks.alert.AlertConditionOutputReference">AlertConditionOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-databricks.alert.Alert.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.alert.Alert.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lifecycleState`<sup>Required</sup> <a name="lifecycleState" id="@cdktf/provider-databricks.alert.Alert.property.lifecycleState"></a>

```java
public java.lang.String getLifecycleState();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-databricks.alert.Alert.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `triggerTime`<sup>Required</sup> <a name="triggerTime" id="@cdktf/provider-databricks.alert.Alert.property.triggerTime"></a>

```java
public java.lang.String getTriggerTime();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-databricks.alert.Alert.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-databricks.alert.Alert.property.conditionInput"></a>

```java
public AlertCondition getConditionInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.alert.AlertCondition">AlertCondition</a>

---

##### `customBodyInput`<sup>Optional</sup> <a name="customBodyInput" id="@cdktf/provider-databricks.alert.Alert.property.customBodyInput"></a>

```java
public java.lang.String getCustomBodyInput();
```

- *Type:* java.lang.String

---

##### `customSubjectInput`<sup>Optional</sup> <a name="customSubjectInput" id="@cdktf/provider-databricks.alert.Alert.property.customSubjectInput"></a>

```java
public java.lang.String getCustomSubjectInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-databricks.alert.Alert.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `notifyOnOkInput`<sup>Optional</sup> <a name="notifyOnOkInput" id="@cdktf/provider-databricks.alert.Alert.property.notifyOnOkInput"></a>

```java
public java.lang.Object getNotifyOnOkInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ownerUserNameInput`<sup>Optional</sup> <a name="ownerUserNameInput" id="@cdktf/provider-databricks.alert.Alert.property.ownerUserNameInput"></a>

```java
public java.lang.String getOwnerUserNameInput();
```

- *Type:* java.lang.String

---

##### `parentPathInput`<sup>Optional</sup> <a name="parentPathInput" id="@cdktf/provider-databricks.alert.Alert.property.parentPathInput"></a>

```java
public java.lang.String getParentPathInput();
```

- *Type:* java.lang.String

---

##### `queryIdInput`<sup>Optional</sup> <a name="queryIdInput" id="@cdktf/provider-databricks.alert.Alert.property.queryIdInput"></a>

```java
public java.lang.String getQueryIdInput();
```

- *Type:* java.lang.String

---

##### `secondsToRetriggerInput`<sup>Optional</sup> <a name="secondsToRetriggerInput" id="@cdktf/provider-databricks.alert.Alert.property.secondsToRetriggerInput"></a>

```java
public java.lang.Number getSecondsToRetriggerInput();
```

- *Type:* java.lang.Number

---

##### `customBody`<sup>Required</sup> <a name="customBody" id="@cdktf/provider-databricks.alert.Alert.property.customBody"></a>

```java
public java.lang.String getCustomBody();
```

- *Type:* java.lang.String

---

##### `customSubject`<sup>Required</sup> <a name="customSubject" id="@cdktf/provider-databricks.alert.Alert.property.customSubject"></a>

```java
public java.lang.String getCustomSubject();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-databricks.alert.Alert.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `notifyOnOk`<sup>Required</sup> <a name="notifyOnOk" id="@cdktf/provider-databricks.alert.Alert.property.notifyOnOk"></a>

```java
public java.lang.Object getNotifyOnOk();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ownerUserName`<sup>Required</sup> <a name="ownerUserName" id="@cdktf/provider-databricks.alert.Alert.property.ownerUserName"></a>

```java
public java.lang.String getOwnerUserName();
```

- *Type:* java.lang.String

---

##### `parentPath`<sup>Required</sup> <a name="parentPath" id="@cdktf/provider-databricks.alert.Alert.property.parentPath"></a>

```java
public java.lang.String getParentPath();
```

- *Type:* java.lang.String

---

##### `queryId`<sup>Required</sup> <a name="queryId" id="@cdktf/provider-databricks.alert.Alert.property.queryId"></a>

```java
public java.lang.String getQueryId();
```

- *Type:* java.lang.String

---

##### `secondsToRetrigger`<sup>Required</sup> <a name="secondsToRetrigger" id="@cdktf/provider-databricks.alert.Alert.property.secondsToRetrigger"></a>

```java
public java.lang.Number getSecondsToRetrigger();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.alert.Alert.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AlertCondition <a name="AlertCondition" id="@cdktf/provider-databricks.alert.AlertCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.alert.AlertCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.alert.AlertCondition;

AlertCondition.builder()
    .op(java.lang.String)
    .operand(AlertConditionOperand)
//  .emptyResultState(java.lang.String)
//  .threshold(AlertConditionThreshold)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.alert.AlertCondition.property.op">op</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/alert#op Alert#op}. |
| <code><a href="#@cdktf/provider-databricks.alert.AlertCondition.property.operand">operand</a></code> | <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperand">AlertConditionOperand</a></code> | operand block. |
| <code><a href="#@cdktf/provider-databricks.alert.AlertCondition.property.emptyResultState">emptyResultState</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/alert#empty_result_state Alert#empty_result_state}. |
| <code><a href="#@cdktf/provider-databricks.alert.AlertCondition.property.threshold">threshold</a></code> | <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThreshold">AlertConditionThreshold</a></code> | threshold block. |

---

##### `op`<sup>Required</sup> <a name="op" id="@cdktf/provider-databricks.alert.AlertCondition.property.op"></a>

```java
public java.lang.String getOp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/alert#op Alert#op}.

---

##### `operand`<sup>Required</sup> <a name="operand" id="@cdktf/provider-databricks.alert.AlertCondition.property.operand"></a>

```java
public AlertConditionOperand getOperand();
```

- *Type:* <a href="#@cdktf/provider-databricks.alert.AlertConditionOperand">AlertConditionOperand</a>

operand block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/alert#operand Alert#operand}

---

##### `emptyResultState`<sup>Optional</sup> <a name="emptyResultState" id="@cdktf/provider-databricks.alert.AlertCondition.property.emptyResultState"></a>

```java
public java.lang.String getEmptyResultState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/alert#empty_result_state Alert#empty_result_state}.

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktf/provider-databricks.alert.AlertCondition.property.threshold"></a>

```java
public AlertConditionThreshold getThreshold();
```

- *Type:* <a href="#@cdktf/provider-databricks.alert.AlertConditionThreshold">AlertConditionThreshold</a>

threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/alert#threshold Alert#threshold}

---

### AlertConditionOperand <a name="AlertConditionOperand" id="@cdktf/provider-databricks.alert.AlertConditionOperand"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.alert.AlertConditionOperand.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.alert.AlertConditionOperand;

AlertConditionOperand.builder()
    .column(AlertConditionOperandColumn)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperand.property.column">column</a></code> | <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandColumn">AlertConditionOperandColumn</a></code> | column block. |

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-databricks.alert.AlertConditionOperand.property.column"></a>

```java
public AlertConditionOperandColumn getColumn();
```

- *Type:* <a href="#@cdktf/provider-databricks.alert.AlertConditionOperandColumn">AlertConditionOperandColumn</a>

column block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/alert#column Alert#column}

---

### AlertConditionOperandColumn <a name="AlertConditionOperandColumn" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumn.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.alert.AlertConditionOperandColumn;

AlertConditionOperandColumn.builder()
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandColumn.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/alert#name Alert#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumn.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/alert#name Alert#name}.

---

### AlertConditionThreshold <a name="AlertConditionThreshold" id="@cdktf/provider-databricks.alert.AlertConditionThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.alert.AlertConditionThreshold.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.alert.AlertConditionThreshold;

AlertConditionThreshold.builder()
    .value(AlertConditionThresholdValue)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThreshold.property.value">value</a></code> | <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValue">AlertConditionThresholdValue</a></code> | value block. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.alert.AlertConditionThreshold.property.value"></a>

```java
public AlertConditionThresholdValue getValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValue">AlertConditionThresholdValue</a>

value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/alert#value Alert#value}

---

### AlertConditionThresholdValue <a name="AlertConditionThresholdValue" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValue.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.alert.AlertConditionThresholdValue;

AlertConditionThresholdValue.builder()
//  .boolValue(java.lang.Boolean)
//  .boolValue(IResolvable)
//  .doubleValue(java.lang.Number)
//  .stringValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValue.property.boolValue">boolValue</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/alert#bool_value Alert#bool_value}. |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValue.property.doubleValue">doubleValue</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/alert#double_value Alert#double_value}. |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValue.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/alert#string_value Alert#string_value}. |

---

##### `boolValue`<sup>Optional</sup> <a name="boolValue" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValue.property.boolValue"></a>

```java
public java.lang.Object getBoolValue();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/alert#bool_value Alert#bool_value}.

---

##### `doubleValue`<sup>Optional</sup> <a name="doubleValue" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValue.property.doubleValue"></a>

```java
public java.lang.Number getDoubleValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/alert#double_value Alert#double_value}.

---

##### `stringValue`<sup>Optional</sup> <a name="stringValue" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValue.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/alert#string_value Alert#string_value}.

---

### AlertConfig <a name="AlertConfig" id="@cdktf/provider-databricks.alert.AlertConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.alert.AlertConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.alert.AlertConfig;

AlertConfig.builder()
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
    .condition(AlertCondition)
    .displayName(java.lang.String)
    .queryId(java.lang.String)
//  .customBody(java.lang.String)
//  .customSubject(java.lang.String)
//  .notifyOnOk(java.lang.Boolean)
//  .notifyOnOk(IResolvable)
//  .ownerUserName(java.lang.String)
//  .parentPath(java.lang.String)
//  .secondsToRetrigger(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-databricks.alert.AlertCondition">AlertCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/alert#display_name Alert#display_name}. |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConfig.property.queryId">queryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/alert#query_id Alert#query_id}. |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConfig.property.customBody">customBody</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/alert#custom_body Alert#custom_body}. |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConfig.property.customSubject">customSubject</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/alert#custom_subject Alert#custom_subject}. |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConfig.property.notifyOnOk">notifyOnOk</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/alert#notify_on_ok Alert#notify_on_ok}. |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConfig.property.ownerUserName">ownerUserName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/alert#owner_user_name Alert#owner_user_name}. |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConfig.property.parentPath">parentPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/alert#parent_path Alert#parent_path}. |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConfig.property.secondsToRetrigger">secondsToRetrigger</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/alert#seconds_to_retrigger Alert#seconds_to_retrigger}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.alert.AlertConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.alert.AlertConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.alert.AlertConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.alert.AlertConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.alert.AlertConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.alert.AlertConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.alert.AlertConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-databricks.alert.AlertConfig.property.condition"></a>

```java
public AlertCondition getCondition();
```

- *Type:* <a href="#@cdktf/provider-databricks.alert.AlertCondition">AlertCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/alert#condition Alert#condition}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-databricks.alert.AlertConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/alert#display_name Alert#display_name}.

---

##### `queryId`<sup>Required</sup> <a name="queryId" id="@cdktf/provider-databricks.alert.AlertConfig.property.queryId"></a>

```java
public java.lang.String getQueryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/alert#query_id Alert#query_id}.

---

##### `customBody`<sup>Optional</sup> <a name="customBody" id="@cdktf/provider-databricks.alert.AlertConfig.property.customBody"></a>

```java
public java.lang.String getCustomBody();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/alert#custom_body Alert#custom_body}.

---

##### `customSubject`<sup>Optional</sup> <a name="customSubject" id="@cdktf/provider-databricks.alert.AlertConfig.property.customSubject"></a>

```java
public java.lang.String getCustomSubject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/alert#custom_subject Alert#custom_subject}.

---

##### `notifyOnOk`<sup>Optional</sup> <a name="notifyOnOk" id="@cdktf/provider-databricks.alert.AlertConfig.property.notifyOnOk"></a>

```java
public java.lang.Object getNotifyOnOk();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/alert#notify_on_ok Alert#notify_on_ok}.

---

##### `ownerUserName`<sup>Optional</sup> <a name="ownerUserName" id="@cdktf/provider-databricks.alert.AlertConfig.property.ownerUserName"></a>

```java
public java.lang.String getOwnerUserName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/alert#owner_user_name Alert#owner_user_name}.

---

##### `parentPath`<sup>Optional</sup> <a name="parentPath" id="@cdktf/provider-databricks.alert.AlertConfig.property.parentPath"></a>

```java
public java.lang.String getParentPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/alert#parent_path Alert#parent_path}.

---

##### `secondsToRetrigger`<sup>Optional</sup> <a name="secondsToRetrigger" id="@cdktf/provider-databricks.alert.AlertConfig.property.secondsToRetrigger"></a>

```java
public java.lang.Number getSecondsToRetrigger();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.72.0/docs/resources/alert#seconds_to_retrigger Alert#seconds_to_retrigger}.

---

## Classes <a name="Classes" id="Classes"></a>

### AlertConditionOperandColumnOutputReference <a name="AlertConditionOperandColumnOutputReference" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.alert.AlertConditionOperandColumnOutputReference;

new AlertConditionOperandColumnOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandColumn">AlertConditionOperandColumn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.property.internalValue"></a>

```java
public AlertConditionOperandColumn getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.alert.AlertConditionOperandColumn">AlertConditionOperandColumn</a>

---


### AlertConditionOperandOutputReference <a name="AlertConditionOperandOutputReference" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.alert.AlertConditionOperandOutputReference;

new AlertConditionOperandOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.putColumn">putColumn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putColumn` <a name="putColumn" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.putColumn"></a>

```java
public void putColumn(AlertConditionOperandColumn value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.putColumn.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.alert.AlertConditionOperandColumn">AlertConditionOperandColumn</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.property.column">column</a></code> | <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference">AlertConditionOperandColumnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.property.columnInput">columnInput</a></code> | <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandColumn">AlertConditionOperandColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperand">AlertConditionOperand</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.property.column"></a>

```java
public AlertConditionOperandColumnOutputReference getColumn();
```

- *Type:* <a href="#@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference">AlertConditionOperandColumnOutputReference</a>

---

##### `columnInput`<sup>Optional</sup> <a name="columnInput" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.property.columnInput"></a>

```java
public AlertConditionOperandColumn getColumnInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.alert.AlertConditionOperandColumn">AlertConditionOperandColumn</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.property.internalValue"></a>

```java
public AlertConditionOperand getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.alert.AlertConditionOperand">AlertConditionOperand</a>

---


### AlertConditionOutputReference <a name="AlertConditionOutputReference" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.alert.AlertConditionOutputReference;

new AlertConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOutputReference.putOperand">putOperand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOutputReference.putThreshold">putThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOutputReference.resetEmptyResultState">resetEmptyResultState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOutputReference.resetThreshold">resetThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOperand` <a name="putOperand" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.putOperand"></a>

```java
public void putOperand(AlertConditionOperand value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.putOperand.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.alert.AlertConditionOperand">AlertConditionOperand</a>

---

##### `putThreshold` <a name="putThreshold" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.putThreshold"></a>

```java
public void putThreshold(AlertConditionThreshold value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.putThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.alert.AlertConditionThreshold">AlertConditionThreshold</a>

---

##### `resetEmptyResultState` <a name="resetEmptyResultState" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.resetEmptyResultState"></a>

```java
public void resetEmptyResultState()
```

##### `resetThreshold` <a name="resetThreshold" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.resetThreshold"></a>

```java
public void resetThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOutputReference.property.operand">operand</a></code> | <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference">AlertConditionOperandOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOutputReference.property.threshold">threshold</a></code> | <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference">AlertConditionThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOutputReference.property.emptyResultStateInput">emptyResultStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOutputReference.property.operandInput">operandInput</a></code> | <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperand">AlertConditionOperand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOutputReference.property.opInput">opInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOutputReference.property.thresholdInput">thresholdInput</a></code> | <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThreshold">AlertConditionThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOutputReference.property.emptyResultState">emptyResultState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOutputReference.property.op">op</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.alert.AlertCondition">AlertCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `operand`<sup>Required</sup> <a name="operand" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.property.operand"></a>

```java
public AlertConditionOperandOutputReference getOperand();
```

- *Type:* <a href="#@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference">AlertConditionOperandOutputReference</a>

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.property.threshold"></a>

```java
public AlertConditionThresholdOutputReference getThreshold();
```

- *Type:* <a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference">AlertConditionThresholdOutputReference</a>

---

##### `emptyResultStateInput`<sup>Optional</sup> <a name="emptyResultStateInput" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.property.emptyResultStateInput"></a>

```java
public java.lang.String getEmptyResultStateInput();
```

- *Type:* java.lang.String

---

##### `operandInput`<sup>Optional</sup> <a name="operandInput" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.property.operandInput"></a>

```java
public AlertConditionOperand getOperandInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.alert.AlertConditionOperand">AlertConditionOperand</a>

---

##### `opInput`<sup>Optional</sup> <a name="opInput" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.property.opInput"></a>

```java
public java.lang.String getOpInput();
```

- *Type:* java.lang.String

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.property.thresholdInput"></a>

```java
public AlertConditionThreshold getThresholdInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.alert.AlertConditionThreshold">AlertConditionThreshold</a>

---

##### `emptyResultState`<sup>Required</sup> <a name="emptyResultState" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.property.emptyResultState"></a>

```java
public java.lang.String getEmptyResultState();
```

- *Type:* java.lang.String

---

##### `op`<sup>Required</sup> <a name="op" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.property.op"></a>

```java
public java.lang.String getOp();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.property.internalValue"></a>

```java
public AlertCondition getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.alert.AlertCondition">AlertCondition</a>

---


### AlertConditionThresholdOutputReference <a name="AlertConditionThresholdOutputReference" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.alert.AlertConditionThresholdOutputReference;

new AlertConditionThresholdOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.putValue">putValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValue` <a name="putValue" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.putValue"></a>

```java
public void putValue(AlertConditionThresholdValue value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValue">AlertConditionThresholdValue</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.property.value">value</a></code> | <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference">AlertConditionThresholdValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.property.valueInput">valueInput</a></code> | <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValue">AlertConditionThresholdValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThreshold">AlertConditionThreshold</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.property.value"></a>

```java
public AlertConditionThresholdValueOutputReference getValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference">AlertConditionThresholdValueOutputReference</a>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.property.valueInput"></a>

```java
public AlertConditionThresholdValue getValueInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValue">AlertConditionThresholdValue</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.property.internalValue"></a>

```java
public AlertConditionThreshold getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.alert.AlertConditionThreshold">AlertConditionThreshold</a>

---


### AlertConditionThresholdValueOutputReference <a name="AlertConditionThresholdValueOutputReference" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.alert.AlertConditionThresholdValueOutputReference;

new AlertConditionThresholdValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.resetBoolValue">resetBoolValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.resetDoubleValue">resetDoubleValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.resetStringValue">resetStringValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBoolValue` <a name="resetBoolValue" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.resetBoolValue"></a>

```java
public void resetBoolValue()
```

##### `resetDoubleValue` <a name="resetDoubleValue" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.resetDoubleValue"></a>

```java
public void resetDoubleValue()
```

##### `resetStringValue` <a name="resetStringValue" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.resetStringValue"></a>

```java
public void resetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.property.boolValueInput">boolValueInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.property.doubleValueInput">doubleValueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.property.stringValueInput">stringValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.property.boolValue">boolValue</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.property.doubleValue">doubleValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValue">AlertConditionThresholdValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `boolValueInput`<sup>Optional</sup> <a name="boolValueInput" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.property.boolValueInput"></a>

```java
public java.lang.Object getBoolValueInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `doubleValueInput`<sup>Optional</sup> <a name="doubleValueInput" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.property.doubleValueInput"></a>

```java
public java.lang.Number getDoubleValueInput();
```

- *Type:* java.lang.Number

---

##### `stringValueInput`<sup>Optional</sup> <a name="stringValueInput" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.property.stringValueInput"></a>

```java
public java.lang.String getStringValueInput();
```

- *Type:* java.lang.String

---

##### `boolValue`<sup>Required</sup> <a name="boolValue" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.property.boolValue"></a>

```java
public java.lang.Object getBoolValue();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `doubleValue`<sup>Required</sup> <a name="doubleValue" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.property.doubleValue"></a>

```java
public java.lang.Number getDoubleValue();
```

- *Type:* java.lang.Number

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.property.internalValue"></a>

```java
public AlertConditionThresholdValue getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValue">AlertConditionThresholdValue</a>

---



