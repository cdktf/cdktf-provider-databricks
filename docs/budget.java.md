# `budget` Submodule <a name="`budget` Submodule" id="@cdktf/provider-databricks.budget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Budget <a name="Budget" id="@cdktf/provider-databricks.budget.Budget"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/budget databricks_budget}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.budget.Budget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.budget.Budget;

Budget.Builder.create(Construct scope, java.lang.String id)
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
//  .accountId(java.lang.String)
//  .alertConfigurations(IResolvable)
//  .alertConfigurations(java.util.List<BudgetAlertConfigurations>)
//  .budgetConfigurationId(java.lang.String)
//  .createTime(java.lang.Number)
//  .displayName(java.lang.String)
//  .filter(BudgetFilter)
//  .id(java.lang.String)
//  .updateTime(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/budget#account_id Budget#account_id}. |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.Initializer.parameter.alertConfigurations">alertConfigurations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurations">BudgetAlertConfigurations</a>></code> | alert_configurations block. |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.Initializer.parameter.budgetConfigurationId">budgetConfigurationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/budget#budget_configuration_id Budget#budget_configuration_id}. |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.Initializer.parameter.createTime">createTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/budget#create_time Budget#create_time}. |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/budget#display_name Budget#display_name}. |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktf/provider-databricks.budget.BudgetFilter">BudgetFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/budget#id Budget#id}. |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.Initializer.parameter.updateTime">updateTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/budget#update_time Budget#update_time}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.budget.Budget.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.budget.Budget.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.budget.Budget.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.budget.Budget.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.budget.Budget.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.budget.Budget.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.budget.Budget.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.budget.Budget.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.budget.Budget.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-databricks.budget.Budget.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/budget#account_id Budget#account_id}.

---

##### `alertConfigurations`<sup>Optional</sup> <a name="alertConfigurations" id="@cdktf/provider-databricks.budget.Budget.Initializer.parameter.alertConfigurations"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurations">BudgetAlertConfigurations</a>>

alert_configurations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/budget#alert_configurations Budget#alert_configurations}

---

##### `budgetConfigurationId`<sup>Optional</sup> <a name="budgetConfigurationId" id="@cdktf/provider-databricks.budget.Budget.Initializer.parameter.budgetConfigurationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/budget#budget_configuration_id Budget#budget_configuration_id}.

---

##### `createTime`<sup>Optional</sup> <a name="createTime" id="@cdktf/provider-databricks.budget.Budget.Initializer.parameter.createTime"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/budget#create_time Budget#create_time}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-databricks.budget.Budget.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/budget#display_name Budget#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-databricks.budget.Budget.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktf/provider-databricks.budget.BudgetFilter">BudgetFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/budget#filter Budget#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.budget.Budget.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/budget#id Budget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `updateTime`<sup>Optional</sup> <a name="updateTime" id="@cdktf/provider-databricks.budget.Budget.Initializer.parameter.updateTime"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/budget#update_time Budget#update_time}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.putAlertConfigurations">putAlertConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.resetAlertConfigurations">resetAlertConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.resetBudgetConfigurationId">resetBudgetConfigurationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.resetCreateTime">resetCreateTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.resetUpdateTime">resetUpdateTime</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.budget.Budget.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.budget.Budget.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.budget.Budget.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.budget.Budget.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.budget.Budget.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.budget.Budget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.budget.Budget.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.budget.Budget.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.budget.Budget.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.budget.Budget.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.budget.Budget.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.budget.Budget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.budget.Budget.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.Budget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.budget.Budget.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.Budget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.budget.Budget.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.Budget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.budget.Budget.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.Budget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.budget.Budget.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.Budget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.budget.Budget.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.Budget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.budget.Budget.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.Budget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.budget.Budget.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.Budget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.budget.Budget.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.Budget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.budget.Budget.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.budget.Budget.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.budget.Budget.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.budget.Budget.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.budget.Budget.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.Budget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.budget.Budget.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.budget.Budget.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.budget.Budget.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.budget.Budget.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.budget.Budget.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.budget.Budget.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.budget.Budget.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAlertConfigurations` <a name="putAlertConfigurations" id="@cdktf/provider-databricks.budget.Budget.putAlertConfigurations"></a>

```java
public void putAlertConfigurations(IResolvable OR java.util.List<BudgetAlertConfigurations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.budget.Budget.putAlertConfigurations.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurations">BudgetAlertConfigurations</a>>

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-databricks.budget.Budget.putFilter"></a>

```java
public void putFilter(BudgetFilter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.budget.Budget.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.budget.BudgetFilter">BudgetFilter</a>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-databricks.budget.Budget.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetAlertConfigurations` <a name="resetAlertConfigurations" id="@cdktf/provider-databricks.budget.Budget.resetAlertConfigurations"></a>

```java
public void resetAlertConfigurations()
```

##### `resetBudgetConfigurationId` <a name="resetBudgetConfigurationId" id="@cdktf/provider-databricks.budget.Budget.resetBudgetConfigurationId"></a>

```java
public void resetBudgetConfigurationId()
```

##### `resetCreateTime` <a name="resetCreateTime" id="@cdktf/provider-databricks.budget.Budget.resetCreateTime"></a>

```java
public void resetCreateTime()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-databricks.budget.Budget.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-databricks.budget.Budget.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.budget.Budget.resetId"></a>

```java
public void resetId()
```

##### `resetUpdateTime` <a name="resetUpdateTime" id="@cdktf/provider-databricks.budget.Budget.resetUpdateTime"></a>

```java
public void resetUpdateTime()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Budget resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.budget.Budget.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.budget.Budget;

Budget.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.budget.Budget.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.budget.Budget.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.budget.Budget;

Budget.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.budget.Budget.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.budget.Budget.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.budget.Budget;

Budget.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.budget.Budget.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.budget.Budget.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.budget.Budget;

Budget.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Budget.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Budget resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.budget.Budget.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.budget.Budget.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Budget to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.budget.Budget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Budget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/budget#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.budget.Budget.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Budget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.property.alertConfigurations">alertConfigurations</a></code> | <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsList">BudgetAlertConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterOutputReference">BudgetFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.property.alertConfigurationsInput">alertConfigurationsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurations">BudgetAlertConfigurations</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.property.budgetConfigurationIdInput">budgetConfigurationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.property.createTimeInput">createTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.property.filterInput">filterInput</a></code> | <code><a href="#@cdktf/provider-databricks.budget.BudgetFilter">BudgetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.property.updateTimeInput">updateTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.property.budgetConfigurationId">budgetConfigurationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.property.createTime">createTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.property.updateTime">updateTime</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.budget.Budget.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.budget.Budget.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.budget.Budget.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.budget.Budget.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.budget.Budget.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.budget.Budget.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.budget.Budget.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.budget.Budget.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.budget.Budget.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.budget.Budget.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.budget.Budget.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.budget.Budget.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.budget.Budget.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.budget.Budget.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `alertConfigurations`<sup>Required</sup> <a name="alertConfigurations" id="@cdktf/provider-databricks.budget.Budget.property.alertConfigurations"></a>

```java
public BudgetAlertConfigurationsList getAlertConfigurations();
```

- *Type:* <a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsList">BudgetAlertConfigurationsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-databricks.budget.Budget.property.filter"></a>

```java
public BudgetFilterOutputReference getFilter();
```

- *Type:* <a href="#@cdktf/provider-databricks.budget.BudgetFilterOutputReference">BudgetFilterOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-databricks.budget.Budget.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `alertConfigurationsInput`<sup>Optional</sup> <a name="alertConfigurationsInput" id="@cdktf/provider-databricks.budget.Budget.property.alertConfigurationsInput"></a>

```java
public java.lang.Object getAlertConfigurationsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurations">BudgetAlertConfigurations</a>>

---

##### `budgetConfigurationIdInput`<sup>Optional</sup> <a name="budgetConfigurationIdInput" id="@cdktf/provider-databricks.budget.Budget.property.budgetConfigurationIdInput"></a>

```java
public java.lang.String getBudgetConfigurationIdInput();
```

- *Type:* java.lang.String

---

##### `createTimeInput`<sup>Optional</sup> <a name="createTimeInput" id="@cdktf/provider-databricks.budget.Budget.property.createTimeInput"></a>

```java
public java.lang.Number getCreateTimeInput();
```

- *Type:* java.lang.Number

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-databricks.budget.Budget.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-databricks.budget.Budget.property.filterInput"></a>

```java
public BudgetFilter getFilterInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.budget.BudgetFilter">BudgetFilter</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.budget.Budget.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `updateTimeInput`<sup>Optional</sup> <a name="updateTimeInput" id="@cdktf/provider-databricks.budget.Budget.property.updateTimeInput"></a>

```java
public java.lang.Number getUpdateTimeInput();
```

- *Type:* java.lang.Number

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-databricks.budget.Budget.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `budgetConfigurationId`<sup>Required</sup> <a name="budgetConfigurationId" id="@cdktf/provider-databricks.budget.Budget.property.budgetConfigurationId"></a>

```java
public java.lang.String getBudgetConfigurationId();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-databricks.budget.Budget.property.createTime"></a>

```java
public java.lang.Number getCreateTime();
```

- *Type:* java.lang.Number

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-databricks.budget.Budget.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.budget.Budget.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-databricks.budget.Budget.property.updateTime"></a>

```java
public java.lang.Number getUpdateTime();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.Budget.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.budget.Budget.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BudgetAlertConfigurations <a name="BudgetAlertConfigurations" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.budget.BudgetAlertConfigurations;

BudgetAlertConfigurations.builder()
//  .actionConfigurations(IResolvable)
//  .actionConfigurations(java.util.List<BudgetAlertConfigurationsActionConfigurations>)
//  .alertConfigurationId(java.lang.String)
//  .quantityThreshold(java.lang.String)
//  .quantityType(java.lang.String)
//  .timePeriod(java.lang.String)
//  .triggerType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurations.property.actionConfigurations">actionConfigurations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurations">BudgetAlertConfigurationsActionConfigurations</a>></code> | action_configurations block. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurations.property.alertConfigurationId">alertConfigurationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/budget#alert_configuration_id Budget#alert_configuration_id}. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurations.property.quantityThreshold">quantityThreshold</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/budget#quantity_threshold Budget#quantity_threshold}. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurations.property.quantityType">quantityType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/budget#quantity_type Budget#quantity_type}. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurations.property.timePeriod">timePeriod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/budget#time_period Budget#time_period}. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurations.property.triggerType">triggerType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/budget#trigger_type Budget#trigger_type}. |

---

##### `actionConfigurations`<sup>Optional</sup> <a name="actionConfigurations" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurations.property.actionConfigurations"></a>

```java
public java.lang.Object getActionConfigurations();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurations">BudgetAlertConfigurationsActionConfigurations</a>>

action_configurations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/budget#action_configurations Budget#action_configurations}

---

##### `alertConfigurationId`<sup>Optional</sup> <a name="alertConfigurationId" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurations.property.alertConfigurationId"></a>

```java
public java.lang.String getAlertConfigurationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/budget#alert_configuration_id Budget#alert_configuration_id}.

---

##### `quantityThreshold`<sup>Optional</sup> <a name="quantityThreshold" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurations.property.quantityThreshold"></a>

```java
public java.lang.String getQuantityThreshold();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/budget#quantity_threshold Budget#quantity_threshold}.

---

##### `quantityType`<sup>Optional</sup> <a name="quantityType" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurations.property.quantityType"></a>

```java
public java.lang.String getQuantityType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/budget#quantity_type Budget#quantity_type}.

---

##### `timePeriod`<sup>Optional</sup> <a name="timePeriod" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurations.property.timePeriod"></a>

```java
public java.lang.String getTimePeriod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/budget#time_period Budget#time_period}.

---

##### `triggerType`<sup>Optional</sup> <a name="triggerType" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurations.property.triggerType"></a>

```java
public java.lang.String getTriggerType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/budget#trigger_type Budget#trigger_type}.

---

### BudgetAlertConfigurationsActionConfigurations <a name="BudgetAlertConfigurationsActionConfigurations" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.budget.BudgetAlertConfigurationsActionConfigurations;

BudgetAlertConfigurationsActionConfigurations.builder()
//  .actionConfigurationId(java.lang.String)
//  .actionType(java.lang.String)
//  .target(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurations.property.actionConfigurationId">actionConfigurationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/budget#action_configuration_id Budget#action_configuration_id}. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurations.property.actionType">actionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/budget#action_type Budget#action_type}. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurations.property.target">target</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/budget#target Budget#target}. |

---

##### `actionConfigurationId`<sup>Optional</sup> <a name="actionConfigurationId" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurations.property.actionConfigurationId"></a>

```java
public java.lang.String getActionConfigurationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/budget#action_configuration_id Budget#action_configuration_id}.

---

##### `actionType`<sup>Optional</sup> <a name="actionType" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurations.property.actionType"></a>

```java
public java.lang.String getActionType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/budget#action_type Budget#action_type}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurations.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/budget#target Budget#target}.

---

### BudgetConfig <a name="BudgetConfig" id="@cdktf/provider-databricks.budget.BudgetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.budget.BudgetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.budget.BudgetConfig;

BudgetConfig.builder()
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
//  .accountId(java.lang.String)
//  .alertConfigurations(IResolvable)
//  .alertConfigurations(java.util.List<BudgetAlertConfigurations>)
//  .budgetConfigurationId(java.lang.String)
//  .createTime(java.lang.Number)
//  .displayName(java.lang.String)
//  .filter(BudgetFilter)
//  .id(java.lang.String)
//  .updateTime(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/budget#account_id Budget#account_id}. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetConfig.property.alertConfigurations">alertConfigurations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurations">BudgetAlertConfigurations</a>></code> | alert_configurations block. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetConfig.property.budgetConfigurationId">budgetConfigurationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/budget#budget_configuration_id Budget#budget_configuration_id}. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetConfig.property.createTime">createTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/budget#create_time Budget#create_time}. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/budget#display_name Budget#display_name}. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-databricks.budget.BudgetFilter">BudgetFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/budget#id Budget#id}. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetConfig.property.updateTime">updateTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/budget#update_time Budget#update_time}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.budget.BudgetConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.budget.BudgetConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.budget.BudgetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.budget.BudgetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.budget.BudgetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.budget.BudgetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.budget.BudgetConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-databricks.budget.BudgetConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/budget#account_id Budget#account_id}.

---

##### `alertConfigurations`<sup>Optional</sup> <a name="alertConfigurations" id="@cdktf/provider-databricks.budget.BudgetConfig.property.alertConfigurations"></a>

```java
public java.lang.Object getAlertConfigurations();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurations">BudgetAlertConfigurations</a>>

alert_configurations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/budget#alert_configurations Budget#alert_configurations}

---

##### `budgetConfigurationId`<sup>Optional</sup> <a name="budgetConfigurationId" id="@cdktf/provider-databricks.budget.BudgetConfig.property.budgetConfigurationId"></a>

```java
public java.lang.String getBudgetConfigurationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/budget#budget_configuration_id Budget#budget_configuration_id}.

---

##### `createTime`<sup>Optional</sup> <a name="createTime" id="@cdktf/provider-databricks.budget.BudgetConfig.property.createTime"></a>

```java
public java.lang.Number getCreateTime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/budget#create_time Budget#create_time}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-databricks.budget.BudgetConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/budget#display_name Budget#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-databricks.budget.BudgetConfig.property.filter"></a>

```java
public BudgetFilter getFilter();
```

- *Type:* <a href="#@cdktf/provider-databricks.budget.BudgetFilter">BudgetFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/budget#filter Budget#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.budget.BudgetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/budget#id Budget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `updateTime`<sup>Optional</sup> <a name="updateTime" id="@cdktf/provider-databricks.budget.BudgetConfig.property.updateTime"></a>

```java
public java.lang.Number getUpdateTime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/budget#update_time Budget#update_time}.

---

### BudgetFilter <a name="BudgetFilter" id="@cdktf/provider-databricks.budget.BudgetFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.budget.BudgetFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.budget.BudgetFilter;

BudgetFilter.builder()
//  .tags(IResolvable)
//  .tags(java.util.List<BudgetFilterTags>)
//  .workspaceId(BudgetFilterWorkspaceId)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilter.property.tags">tags</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.budget.BudgetFilterTags">BudgetFilterTags</a>></code> | tags block. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilter.property.workspaceId">workspaceId</a></code> | <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceId">BudgetFilterWorkspaceId</a></code> | workspace_id block. |

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-databricks.budget.BudgetFilter.property.tags"></a>

```java
public java.lang.Object getTags();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.budget.BudgetFilterTags">BudgetFilterTags</a>>

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/budget#tags Budget#tags}

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktf/provider-databricks.budget.BudgetFilter.property.workspaceId"></a>

```java
public BudgetFilterWorkspaceId getWorkspaceId();
```

- *Type:* <a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceId">BudgetFilterWorkspaceId</a>

workspace_id block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/budget#workspace_id Budget#workspace_id}

---

### BudgetFilterTags <a name="BudgetFilterTags" id="@cdktf/provider-databricks.budget.BudgetFilterTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.budget.BudgetFilterTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.budget.BudgetFilterTags;

BudgetFilterTags.builder()
//  .key(java.lang.String)
//  .value(BudgetFilterTagsValue)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/budget#key Budget#key}. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTags.property.value">value</a></code> | <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValue">BudgetFilterTagsValue</a></code> | value block. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-databricks.budget.BudgetFilterTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/budget#key Budget#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.budget.BudgetFilterTags.property.value"></a>

```java
public BudgetFilterTagsValue getValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValue">BudgetFilterTagsValue</a>

value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/budget#value Budget#value}

---

### BudgetFilterTagsValue <a name="BudgetFilterTagsValue" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValue.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.budget.BudgetFilterTagsValue;

BudgetFilterTagsValue.builder()
//  .operator(java.lang.String)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValue.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/budget#operator Budget#operator}. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValue.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/budget#values Budget#values}. |

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValue.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/budget#operator Budget#operator}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValue.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/budget#values Budget#values}.

---

### BudgetFilterWorkspaceId <a name="BudgetFilterWorkspaceId" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceId"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceId.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.budget.BudgetFilterWorkspaceId;

BudgetFilterWorkspaceId.builder()
//  .operator(java.lang.String)
//  .values(java.util.List<java.lang.Number>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceId.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/budget#operator Budget#operator}. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceId.property.values">values</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/budget#values Budget#values}. |

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceId.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/budget#operator Budget#operator}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceId.property.values"></a>

```java
public java.util.List<java.lang.Number> getValues();
```

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/resources/budget#values Budget#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### BudgetAlertConfigurationsActionConfigurationsList <a name="BudgetAlertConfigurationsActionConfigurationsList" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.budget.BudgetAlertConfigurationsActionConfigurationsList;

new BudgetAlertConfigurationsActionConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.get"></a>

```java
public BudgetAlertConfigurationsActionConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurations">BudgetAlertConfigurationsActionConfigurations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurations">BudgetAlertConfigurationsActionConfigurations</a>>

---


### BudgetAlertConfigurationsActionConfigurationsOutputReference <a name="BudgetAlertConfigurationsActionConfigurationsOutputReference" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference;

new BudgetAlertConfigurationsActionConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.resetActionConfigurationId">resetActionConfigurationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.resetActionType">resetActionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.resetTarget">resetTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActionConfigurationId` <a name="resetActionConfigurationId" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.resetActionConfigurationId"></a>

```java
public void resetActionConfigurationId()
```

##### `resetActionType` <a name="resetActionType" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.resetActionType"></a>

```java
public void resetActionType()
```

##### `resetTarget` <a name="resetTarget" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.resetTarget"></a>

```java
public void resetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.property.actionConfigurationIdInput">actionConfigurationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.property.actionTypeInput">actionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.property.targetInput">targetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.property.actionConfigurationId">actionConfigurationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.property.actionType">actionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.property.target">target</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurations">BudgetAlertConfigurationsActionConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionConfigurationIdInput`<sup>Optional</sup> <a name="actionConfigurationIdInput" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.property.actionConfigurationIdInput"></a>

```java
public java.lang.String getActionConfigurationIdInput();
```

- *Type:* java.lang.String

---

##### `actionTypeInput`<sup>Optional</sup> <a name="actionTypeInput" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.property.actionTypeInput"></a>

```java
public java.lang.String getActionTypeInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.property.targetInput"></a>

```java
public java.lang.String getTargetInput();
```

- *Type:* java.lang.String

---

##### `actionConfigurationId`<sup>Required</sup> <a name="actionConfigurationId" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.property.actionConfigurationId"></a>

```java
public java.lang.String getActionConfigurationId();
```

- *Type:* java.lang.String

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.property.actionType"></a>

```java
public java.lang.String getActionType();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurations">BudgetAlertConfigurationsActionConfigurations</a>

---


### BudgetAlertConfigurationsList <a name="BudgetAlertConfigurationsList" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.budget.BudgetAlertConfigurationsList;

new BudgetAlertConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsList.get"></a>

```java
public BudgetAlertConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurations">BudgetAlertConfigurations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurations">BudgetAlertConfigurations</a>>

---


### BudgetAlertConfigurationsOutputReference <a name="BudgetAlertConfigurationsOutputReference" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.budget.BudgetAlertConfigurationsOutputReference;

new BudgetAlertConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.putActionConfigurations">putActionConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.resetActionConfigurations">resetActionConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.resetAlertConfigurationId">resetAlertConfigurationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.resetQuantityThreshold">resetQuantityThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.resetQuantityType">resetQuantityType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.resetTimePeriod">resetTimePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.resetTriggerType">resetTriggerType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putActionConfigurations` <a name="putActionConfigurations" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.putActionConfigurations"></a>

```java
public void putActionConfigurations(IResolvable OR java.util.List<BudgetAlertConfigurationsActionConfigurations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.putActionConfigurations.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurations">BudgetAlertConfigurationsActionConfigurations</a>>

---

##### `resetActionConfigurations` <a name="resetActionConfigurations" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.resetActionConfigurations"></a>

```java
public void resetActionConfigurations()
```

##### `resetAlertConfigurationId` <a name="resetAlertConfigurationId" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.resetAlertConfigurationId"></a>

```java
public void resetAlertConfigurationId()
```

##### `resetQuantityThreshold` <a name="resetQuantityThreshold" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.resetQuantityThreshold"></a>

```java
public void resetQuantityThreshold()
```

##### `resetQuantityType` <a name="resetQuantityType" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.resetQuantityType"></a>

```java
public void resetQuantityType()
```

##### `resetTimePeriod` <a name="resetTimePeriod" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.resetTimePeriod"></a>

```java
public void resetTimePeriod()
```

##### `resetTriggerType` <a name="resetTriggerType" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.resetTriggerType"></a>

```java
public void resetTriggerType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.actionConfigurations">actionConfigurations</a></code> | <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList">BudgetAlertConfigurationsActionConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.actionConfigurationsInput">actionConfigurationsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurations">BudgetAlertConfigurationsActionConfigurations</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.alertConfigurationIdInput">alertConfigurationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.quantityThresholdInput">quantityThresholdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.quantityTypeInput">quantityTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.timePeriodInput">timePeriodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.triggerTypeInput">triggerTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.alertConfigurationId">alertConfigurationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.quantityThreshold">quantityThreshold</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.quantityType">quantityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.timePeriod">timePeriod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.triggerType">triggerType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurations">BudgetAlertConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionConfigurations`<sup>Required</sup> <a name="actionConfigurations" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.actionConfigurations"></a>

```java
public BudgetAlertConfigurationsActionConfigurationsList getActionConfigurations();
```

- *Type:* <a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurationsList">BudgetAlertConfigurationsActionConfigurationsList</a>

---

##### `actionConfigurationsInput`<sup>Optional</sup> <a name="actionConfigurationsInput" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.actionConfigurationsInput"></a>

```java
public java.lang.Object getActionConfigurationsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurationsActionConfigurations">BudgetAlertConfigurationsActionConfigurations</a>>

---

##### `alertConfigurationIdInput`<sup>Optional</sup> <a name="alertConfigurationIdInput" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.alertConfigurationIdInput"></a>

```java
public java.lang.String getAlertConfigurationIdInput();
```

- *Type:* java.lang.String

---

##### `quantityThresholdInput`<sup>Optional</sup> <a name="quantityThresholdInput" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.quantityThresholdInput"></a>

```java
public java.lang.String getQuantityThresholdInput();
```

- *Type:* java.lang.String

---

##### `quantityTypeInput`<sup>Optional</sup> <a name="quantityTypeInput" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.quantityTypeInput"></a>

```java
public java.lang.String getQuantityTypeInput();
```

- *Type:* java.lang.String

---

##### `timePeriodInput`<sup>Optional</sup> <a name="timePeriodInput" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.timePeriodInput"></a>

```java
public java.lang.String getTimePeriodInput();
```

- *Type:* java.lang.String

---

##### `triggerTypeInput`<sup>Optional</sup> <a name="triggerTypeInput" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.triggerTypeInput"></a>

```java
public java.lang.String getTriggerTypeInput();
```

- *Type:* java.lang.String

---

##### `alertConfigurationId`<sup>Required</sup> <a name="alertConfigurationId" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.alertConfigurationId"></a>

```java
public java.lang.String getAlertConfigurationId();
```

- *Type:* java.lang.String

---

##### `quantityThreshold`<sup>Required</sup> <a name="quantityThreshold" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.quantityThreshold"></a>

```java
public java.lang.String getQuantityThreshold();
```

- *Type:* java.lang.String

---

##### `quantityType`<sup>Required</sup> <a name="quantityType" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.quantityType"></a>

```java
public java.lang.String getQuantityType();
```

- *Type:* java.lang.String

---

##### `timePeriod`<sup>Required</sup> <a name="timePeriod" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.timePeriod"></a>

```java
public java.lang.String getTimePeriod();
```

- *Type:* java.lang.String

---

##### `triggerType`<sup>Required</sup> <a name="triggerType" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.triggerType"></a>

```java
public java.lang.String getTriggerType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.budget.BudgetAlertConfigurationsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.budget.BudgetAlertConfigurations">BudgetAlertConfigurations</a>

---


### BudgetFilterOutputReference <a name="BudgetFilterOutputReference" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.budget.BudgetFilterOutputReference;

new BudgetFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterOutputReference.putWorkspaceId">putWorkspaceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterOutputReference.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTags` <a name="putTags" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.putTags"></a>

```java
public void putTags(IResolvable OR java.util.List<BudgetFilterTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.putTags.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.budget.BudgetFilterTags">BudgetFilterTags</a>>

---

##### `putWorkspaceId` <a name="putWorkspaceId" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.putWorkspaceId"></a>

```java
public void putWorkspaceId(BudgetFilterWorkspaceId value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.putWorkspaceId.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceId">BudgetFilterWorkspaceId</a>

---

##### `resetTags` <a name="resetTags" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.resetTags"></a>

```java
public void resetTags()
```

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsList">BudgetFilterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterOutputReference.property.workspaceId">workspaceId</a></code> | <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference">BudgetFilterWorkspaceIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterOutputReference.property.tagsInput">tagsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.budget.BudgetFilterTags">BudgetFilterTags</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceId">BudgetFilterWorkspaceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.budget.BudgetFilter">BudgetFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.property.tags"></a>

```java
public BudgetFilterTagsList getTags();
```

- *Type:* <a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsList">BudgetFilterTagsList</a>

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.property.workspaceId"></a>

```java
public BudgetFilterWorkspaceIdOutputReference getWorkspaceId();
```

- *Type:* <a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference">BudgetFilterWorkspaceIdOutputReference</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.property.tagsInput"></a>

```java
public java.lang.Object getTagsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.budget.BudgetFilterTags">BudgetFilterTags</a>>

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.property.workspaceIdInput"></a>

```java
public BudgetFilterWorkspaceId getWorkspaceIdInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceId">BudgetFilterWorkspaceId</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.budget.BudgetFilterOutputReference.property.internalValue"></a>

```java
public BudgetFilter getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.budget.BudgetFilter">BudgetFilter</a>

---


### BudgetFilterTagsList <a name="BudgetFilterTagsList" id="@cdktf/provider-databricks.budget.BudgetFilterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.budget.BudgetFilterTagsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.budget.BudgetFilterTagsList;

new BudgetFilterTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.budget.BudgetFilterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.budget.BudgetFilterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.budget.BudgetFilterTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.budget.BudgetFilterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.budget.BudgetFilterTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.budget.BudgetFilterTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.budget.BudgetFilterTagsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.budget.BudgetFilterTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.budget.BudgetFilterTagsList.get"></a>

```java
public BudgetFilterTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.budget.BudgetFilterTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.budget.BudgetFilterTags">BudgetFilterTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.budget.BudgetFilterTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.budget.BudgetFilterTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.budget.BudgetFilterTagsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.budget.BudgetFilterTags">BudgetFilterTags</a>>

---


### BudgetFilterTagsOutputReference <a name="BudgetFilterTagsOutputReference" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.budget.BudgetFilterTagsOutputReference;

new BudgetFilterTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.putValue">putValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValue` <a name="putValue" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.putValue"></a>

```java
public void putValue(BudgetFilterTagsValue value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValue">BudgetFilterTagsValue</a>

---

##### `resetKey` <a name="resetKey" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.property.value">value</a></code> | <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference">BudgetFilterTagsValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.property.valueInput">valueInput</a></code> | <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValue">BudgetFilterTagsValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.budget.BudgetFilterTags">BudgetFilterTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.property.value"></a>

```java
public BudgetFilterTagsValueOutputReference getValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference">BudgetFilterTagsValueOutputReference</a>

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.property.valueInput"></a>

```java
public BudgetFilterTagsValue getValueInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValue">BudgetFilterTagsValue</a>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.budget.BudgetFilterTagsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.budget.BudgetFilterTags">BudgetFilterTags</a>

---


### BudgetFilterTagsValueOutputReference <a name="BudgetFilterTagsValueOutputReference" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.budget.BudgetFilterTagsValueOutputReference;

new BudgetFilterTagsValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.resetOperator"></a>

```java
public void resetOperator()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValue">BudgetFilterTagsValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.budget.BudgetFilterTagsValueOutputReference.property.internalValue"></a>

```java
public BudgetFilterTagsValue getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.budget.BudgetFilterTagsValue">BudgetFilterTagsValue</a>

---


### BudgetFilterWorkspaceIdOutputReference <a name="BudgetFilterWorkspaceIdOutputReference" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.budget.BudgetFilterWorkspaceIdOutputReference;

new BudgetFilterWorkspaceIdOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.resetOperator"></a>

```java
public void resetOperator()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceId">BudgetFilterWorkspaceId</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.Number> getValuesInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.property.values"></a>

```java
public java.util.List<java.lang.Number> getValues();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.budget.BudgetFilterWorkspaceIdOutputReference.property.internalValue"></a>

```java
public BudgetFilterWorkspaceId getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.budget.BudgetFilterWorkspaceId">BudgetFilterWorkspaceId</a>

---



